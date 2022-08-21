import { CreateSendersController } from '@modules/Senders/useCase/CreateSenders/createSendersController';
import { Router } from 'express';

const sendersRoutes = Router();
const sendersController = new CreateSendersController();

sendersRoutes.post('/', sendersController.handle);

export { sendersRoutes };
