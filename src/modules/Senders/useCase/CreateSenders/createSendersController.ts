import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSendersUseCase } from './createSendersUseCase';

class CreateSendersController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const {
      rem_remetente,
      rem_abreviado,
      rem_fixo,
      rem_movel,
      emp_codigo,
    } = request.body;

    const createSendersUseCase = container.resolve(
      CreateSendersUseCase,
    );

    const senders = await createSendersUseCase.execute({
      rem_remetente,
      rem_abreviado,
      rem_fixo,
      rem_movel,
      emp_codigo,
    });

    return response.status(201).json(senders);
  }
}
export { CreateSendersController };
