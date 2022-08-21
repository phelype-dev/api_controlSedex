import { ICreateSendersDTO } from '@modules/Senders/dtos/ICreateSendersDTO';
import { ICreateSendersRepository } from '@modules/Senders/repository/ICreateSendersRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { Senders } from '../entities/Senders';

class SendersRepository implements ICreateSendersRepository {
  private repository: Repository<Senders>;
  constructor() {
    this.repository = dataSource.getRepository(Senders);
  }

  async create({
    rem_remetente,
    rem_abreviado,
    rem_fixo,
    rem_movel,
    emp_codigo,
  }: ICreateSendersDTO): Promise<Senders> {
    const sender = this.repository.create({
      rem_remetente,
      rem_abreviado,
      rem_fixo,
      rem_movel,
      emp_codigo,
    });
    this.repository.save(sender);
    return sender;
  }

  async findByNames(rem_remetente: string): Promise<Senders> {
    const findSend = this.repository.findOneBy({ rem_remetente });
    return findSend;
  }

  async findAll(): Promise<Senders[]> {
    const findAll = this.repository.find();
    return findAll;
  }
}

export { SendersRepository };
