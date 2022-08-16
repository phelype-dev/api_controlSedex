import { ICreateTipoItemDTO } from '@modules/Item/dtos/ICreateTipoItem';
import { ITipoItemRepository } from '@modules/Item/repositories/ITipoItemRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { TipoItems } from '../entities/ItemTipo';

class TipoItemRepository implements ITipoItemRepository {
  private repository: Repository<TipoItems>;

  constructor() {
    this.repository = dataSource.getRepository(TipoItems);
  }

  async create({
    tit_tipo_item,
  }: ICreateTipoItemDTO): Promise<TipoItems> {
    const Item = this.repository.create({ tit_tipo_item });
    this.repository.save(Item);
    return Item;
  }

  async listAll(): Promise<TipoItems[]> {
    const findAll = await this.repository.find();
    return findAll;
  }

  async findByName(tit_tipo_item: string): Promise<TipoItems> {
    const tipoItem = await this.repository.findOneBy({
      tit_tipo_item,
    });
    return tipoItem;
  }
}

export { TipoItemRepository };
