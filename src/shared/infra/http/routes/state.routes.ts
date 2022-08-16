import { CreateStateController } from '@modules/Estado/UseCases/CreateEstado/createStateController';
import { ListStateController } from '@modules/Estado/UseCases/ListEstado/ListStateController';
import { Router } from 'express';

const stateRoutes = Router();

const createStateContoller = new CreateStateController();
const listStateController = new ListStateController();

stateRoutes.post('/', createStateContoller.handle);
stateRoutes.get('/', listStateController.handle);

export { stateRoutes };
