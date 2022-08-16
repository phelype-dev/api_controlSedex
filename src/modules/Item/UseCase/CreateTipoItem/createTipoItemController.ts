import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTipoItemUseCase } from './createTipoItemUseCase';

class CreateTipoItemController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { tit_tipo_item } = request.body;

    const createTipoItemUseCase = container.resolve(
      CreateTipoItemUseCase,
    );
    const tipoItem = await createTipoItemUseCase.execute({
      tit_tipo_item,
    });
    return response.status(201).json(tipoItem);
  }
}
export { CreateTipoItemController };
