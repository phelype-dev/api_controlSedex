import { ICreateTipoItemDTO } from '../dtos/ICreateTipoItem';
import { TipoItems } from '../infra/typeorm/entities/ItemTipo';

interface ITipoItemRepository {
  create({ tit_tipo_item }: ICreateTipoItemDTO): Promise<TipoItems>;
  listAll(): Promise<TipoItems[]>;
  findByName(tit_tipo_item: string): Promise<TipoItems>;
}

export { ITipoItemRepository };
