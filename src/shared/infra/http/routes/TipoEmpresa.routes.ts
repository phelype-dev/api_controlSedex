import { CreateTipoEmpresaController } from '@modules/Empresa/UseCases/createTipoEmpresa/createTipoEmpresaController';
import { Router } from 'express';

const tipoEmpresaRoutes = Router();

const tipoEmpresaController = new CreateTipoEmpresaController();

tipoEmpresaRoutes.post('/', tipoEmpresaController.handle);

export { tipoEmpresaRoutes };
