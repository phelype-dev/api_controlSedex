import { TipoEmpresa } from '@modules/Empresa/infra/typeorm/entities/TipoEmpresa';
import { ITipoEmpresaRepository } from '@modules/Empresa/repositories/ICreateTipoEmpresaRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  tem_tipo_empresa: string;
}
@injectable()
class CreateTipoEmpresaUseCase {
  constructor(
    @inject('TipoEmpresaRepository')
    private tipoEmpresaRepository: ITipoEmpresaRepository,
  ) {}

  async execute({
    tem_tipo_empresa,
  }: IRequest): Promise<TipoEmpresa> {
    const tipo = await this.tipoEmpresaRepository.create({
      tem_tipo_empresa,
    });
    return tipo;
  }
}

export { CreateTipoEmpresaUseCase };
