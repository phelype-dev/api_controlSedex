import { ICreateEstadoDTO } from '@modules/Estado/dtos/ICreateEstadoDTO';
import { ICreateEstadoRepository } from '@modules/Estado/repository/ICreateEstadoRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { Estado } from '../entities/Estados';

class EstadoRepository implements ICreateEstadoRepository {
  private repository: Repository<Estado>;
  constructor() {
    this.repository = dataSource.getRepository(Estado);
  }

  async create({
    estado,
    sigla_est,
  }: ICreateEstadoDTO): Promise<Estado> {
    const newEstado = this.repository.create({
      estado,
      sigla_est,
    });
    this.repository.save(newEstado);

    return newEstado;
  }
  list(): Promise<Estado[]> {
    const findAllEst = this.repository.find();
    return findAllEst;
  }
  findByName(estado: string): Promise<Estado> {
    const findName = this.repository.findOneBy({ estado });
    return findName;
  }
}

export { EstadoRepository };
