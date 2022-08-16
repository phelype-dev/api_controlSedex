import { CreateEquipamentTypeController } from '@modules/Equipamento/useCase/createEquipamentType/CreateEquipamentTypeController';
import { Router } from 'express';

const equipamentRoutes = Router();

const equipamentController = new CreateEquipamentTypeController();

equipamentRoutes.post('/', equipamentController.handle);

export { equipamentRoutes };
