import { CreateCityController } from '@modules/City/useCases/createCity/CreateCityController';
import { Router } from 'express';

const cityRoutes = Router();

const createCityController = new CreateCityController();

cityRoutes.post('/', createCityController.handle);

export { cityRoutes };
