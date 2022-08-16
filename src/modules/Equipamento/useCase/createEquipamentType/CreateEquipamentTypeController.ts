import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateEquipamentTypeUseCase } from './CreateEquipamentTypeUseCase';

class CreateEquipamentTypeController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { equ_tipo } = request.body;
    const createEquipamentUseCase = container.resolve(
      CreateEquipamentTypeUseCase,
    );
    const equipament = await createEquipamentUseCase.execute({
      equ_tipo,
    });
    return response.status(201).json(equipament);
  }
}

export { CreateEquipamentTypeController };
