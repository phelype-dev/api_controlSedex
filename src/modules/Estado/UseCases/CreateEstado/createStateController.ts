import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateEstadoUseCase } from './createStateUseCase';

class CreateStateController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { estado, sigla_est } = request.body;

    const createEstadoUseCase = container.resolve(
      CreateEstadoUseCase,
    );

    const newEstado = await createEstadoUseCase.execute({
      estado,
      sigla_est,
    });

    return response.status(201).json(newEstado);
  }
}

export { CreateStateController };
