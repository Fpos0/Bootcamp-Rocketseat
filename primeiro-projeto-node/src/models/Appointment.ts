import {v4 as uuid} from 'uuid';
import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn, ManyToOne,JoinColumn} from 'typeorm';
import User from './User'
//A clase eh um parametro q ta passando para essa função entity
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'provider_id'})
  //qual q eh a coluna q vai identificar o usuario/agendamento
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


}

export default Appointment;

//Omit<>  DENTRO do <> fica 2 parametros ,o 1 eeh o tipo,e o segundo eh qual paremetro quer omitir
