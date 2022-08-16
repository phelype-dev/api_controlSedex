import { Router } from 'express';
import { cityRoutes } from './city.routes';
import { equipamentRoutes } from './equipament.routes';
import { stateRoutes } from './state.routes';
import { tipoEmpresaRoutes } from './TipoEmpresa.routes';
import { tipoItemRoutes } from './TipoItem.routes';

const router = Router();

router.use('/tipoempresa', tipoEmpresaRoutes);
router.use('/tipoitem', tipoItemRoutes);
router.use('/state', stateRoutes);
router.use('/city', cityRoutes);
router.use('/equipament', equipamentRoutes);

export { router };
