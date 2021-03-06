import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {

  console.log(request.user);
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});
// SoC Separation of Concerns
appointmentsRouter.post('/', async (request, response) => {

  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);


  const createAppoinment = new CreateAppointmentService();

  const appointment = await createAppoinment.execute({
    date: parsedDate,
    provider_id
  });

  return response.json(appointment);

});

export default appointmentsRouter;
