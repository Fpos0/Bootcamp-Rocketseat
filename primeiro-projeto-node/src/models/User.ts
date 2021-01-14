import {v4 as uuid} from 'uuid';
import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn} from 'typeorm';

//A clase eh um parametro q ta passando para essa função entity
@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default User;

//KISS = KEEP IT SIMPLE AND STUPID
