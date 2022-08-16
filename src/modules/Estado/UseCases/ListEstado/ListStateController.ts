import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListStateUseCase } from './ListStateUseCase';

class ListStateController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listStateUseCase = container.resolve(ListStateUseCase);
    const all = await listStateUseCase.execute();
    return response.json(all);
  }
}

export { ListStateController };
