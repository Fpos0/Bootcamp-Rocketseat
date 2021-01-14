import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import {getCustomRepository} from 'typeorm';
import {startOfHour} from 'date-fns';
import AppError from '../errors/AppError';

interface Request{ // DTO DATA TRANSFTER OBJETCT
  provider_id : string
  date: Date;
}

//sempre vai ter 1 metodo,e soh 1 metodo,geralmente EXECUTE() OU RUN()
/**
 * Depency Inversion(SOLID),ao invez de instacia um novo repositorio ,vamos receber o repositorio como parametro da nossa,
 * facilitando para q varios services mexam com o mesmo repositorio
 */
class CreateAppoinmentService{


  public async execute({date,provider_id}:Request):Promise<Appointment> {
    const appointmenteDate = startOfHour(date);
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    //usa o await pq geralmente instrucoes de DB demoram mais q o normal
    const findAppointmentInSameDate =  await appointmentsRepository.findByDate(appointmenteDate);

    if(findAppointmentInSameDate) {
       throw new AppError('this Appointment is already bookEd!!');

    }

    const appointment = appointmentsRepository.create({ //Cria o objeto mas nao salvar no banco de dados
      provider_id,
      date: appointmenteDate // se tivesse mesmo nome nao precisaria do ": parsedDate"
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}
export default CreateAppoinmentService;
