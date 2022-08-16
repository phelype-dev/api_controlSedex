import { Repository } from 'typeorm';
import { ICreateTipoEmpresaDTO } from '@modules/Empresa/dtos/ICreateTipoEmpresaDTO';
import { ITipoEmpresaRepository } from '@modules/Empresa/repositories/ICreateTipoEmpresaRepository';
import { dataSource } from '@shared/infra/typeorm';
import { TipoEmpresa } from '../entities/TipoEmpresa';

class TipoEmpresaRepository implements ITipoEmpresaRepository {
  private repository: Repository<TipoEmpresa>;
  constructor() {
    this.repository = dataSource.getRepository(TipoEmpresa);
  }

  async create({
    tem_tipo_empresa,
  }: ICreateTipoEmpresaDTO): Promise<TipoEmpresa> {
    const tipoEmpresa = this.repository.create({
      tem_tipo_empresa,
    });

    this.repository.save(tipoEmpresa);
    return tipoEmpresa;
  }
}

export { TipoEmpresaRepository };
