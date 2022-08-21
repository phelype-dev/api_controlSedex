import { ICreateSendersDTO } from '../dtos/ICreateSendersDTO';
import { Senders } from '../infra/typeorm/entities/Senders';

interface ICreateSendersRepository {
  create(data: ICreateSendersDTO): Promise<Senders>;
  findByNames(rem_remetente: string): Promise<Senders>;
  findAll(): Promise<Senders[]>;
}
export { ICreateSendersRepository };
