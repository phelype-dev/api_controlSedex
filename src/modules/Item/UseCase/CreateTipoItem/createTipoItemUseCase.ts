import { TipoItems } from '@modules/Item/infra/typeorm/entities/ItemTipo';
import { TipoItemRepository } from '@modules/Item/infra/typeorm/repositories/TipoItemRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  tit_tipo_item: string;
}

@injectable()
class CreateTipoItemUseCase {
  constructor(
    @inject('TipoItemRepository')
    private tipoItemRepository: TipoItemRepository,
  ) {}

  async execute({ tit_tipo_item }: IRequest): Promise<TipoItems> {
    const tipoItem = this.tipoItemRepository.create({
      tit_tipo_item,
    });
    return tipoItem;
  }
}

export { CreateTipoItemUseCase };
