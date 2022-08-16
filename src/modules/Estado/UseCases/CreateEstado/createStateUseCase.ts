import { Estado } from '@modules/Estado/infra/typeorm/entities/Estados';
import { EstadoRepository } from '@modules/Estado/infra/typeorm/repositories/EstadoRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  estado: string;
  sigla_est: string;
}

@injectable()
class CreateEstadoUseCase {
  constructor(
    @inject('EstadoRepository')
    private estadoRepository: EstadoRepository,
  ) {}

  async execute({ estado, sigla_est }: IRequest): Promise<Estado> {
    const estadoAlreadyExists =
      await this.estadoRepository.findByName(estado);

    if (estadoAlreadyExists) {
      throw new AppError('Estado already exists');
    }

    const newEstado = await this.estadoRepository.create({
      estado,
      sigla_est,
    });
    return newEstado;
  }
}

export { CreateEstadoUseCase };
