import { CreateTipoItemController } from '@modules/Item/UseCase/CreateTipoItem/createTipoItemController';
import { Router } from 'express';

const tipoItemRoutes = Router();

const tipoItemController = new CreateTipoItemController();

tipoItemRoutes.post('/', tipoItemController.handle);

export { tipoItemRoutes };
