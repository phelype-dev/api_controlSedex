import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCityUseCase } from './CreateCityUseCase';

class CreateCityController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { municipio, estado_id } = request.body;

    const createCityUseCase = container.resolve(CreateCityUseCase);

    const city = await createCityUseCase.execute({
      municipio,
      estado_id,
    });
    return response.status(201).json(city);
  }
}

export { CreateCityController };
