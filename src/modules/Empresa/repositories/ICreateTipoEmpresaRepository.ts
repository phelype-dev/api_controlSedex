import { ICreateTipoEmpresaDTO } from '../dtos/ICreateTipoEmpresaDTO';
import { TipoEmpresa } from '../infra/typeorm/entities/TipoEmpresa';

interface ITipoEmpresaRepository {
  create(data: ICreateTipoEmpresaDTO): Promise<TipoEmpresa>;
}
export { ITipoEmpresaRepository };
