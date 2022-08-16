import { Estado } from '@modules/Estado/infra/typeorm/entities/Estados';
import { ICreateEstadoRepository } from '@modules/Estado/repository/ICreateEstadoRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListStateUseCase {
  constructor(
    @inject('EstadoRepository')
    private stateRepository: ICreateEstadoRepository,
  ) {}

  async execute(): Promise<Estado[]> {
    const state = await this.stateRepository.list();
    return state;
  }
}

export { ListStateUseCase };
