import { CreateCompaniesController } from '@modules/Empresa/UseCases/CreateCompanies/CreateCompaniesController';
import { Router } from 'express';

const companyRoutes = Router();

const companyController = new CreateCompaniesController();

companyRoutes.post('/', companyController.handle);

export { companyRoutes };
