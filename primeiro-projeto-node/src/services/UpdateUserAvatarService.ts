import { getRepository} from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';
import User from '../models/User';
import AppError from '../errors/AppError';


interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService{
  public async execute({ user_id, avatarFilename }:Request): Promise<User>{
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if(!user) {
      throw new AppError('only authenticated users can change avatar.',401);
    }

    if(user.avatar) {
      //entrar aq significa q ja tem 1 avatar,deletar  avatar anterior
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar); //Achando o antigo avatar pra remover
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
      //Checando se o arquivo realmente existe,stat traz status do arquivo so se ele existir

      if(userAvatarFileExists){//removendo o avatar existente para add o novo
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;

  }
}

export default UpdateUserAvatarService;
