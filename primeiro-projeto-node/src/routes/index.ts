import { Router } from 'express';
import appointmentsRouter from './appointments.routes'
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

// Faz com que toda roda q inicie com o /appointments ,seja GET PUT POST DELETE,tudo q vez dps do /apopintsmetns eh repassado pra essa função
//ai no arqv do appointments,nao precisa passa o /appoinments no endenreco,soh o '/' ja q ele ja ta no /appointments

export default routes;
