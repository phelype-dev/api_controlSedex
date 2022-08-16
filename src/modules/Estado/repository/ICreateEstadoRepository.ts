import { ICreateEstadoDTO } from '../dtos/ICreateEstadoDTO';
import { Estado } from '../infra/typeorm/entities/Estados';

interface ICreateEstadoRepository {
  create(data: ICreateEstadoDTO): Promise<Estado>;
  list(): Promise<Estado[]>;
  findByName(estado: string): Promise<Estado>;
}

export { ICreateEstadoRepository };
