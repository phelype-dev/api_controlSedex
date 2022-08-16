import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTipoEmpresaUseCase } from './CreateTipoEmpresaCaseUSe';

class CreateTipoEmpresaController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { tem_tipo_empresa } = request.body;

    const createTipoEmpresaUseCase = container.resolve(
      CreateTipoEmpresaUseCase,
    );
    const tipo_empresa = await createTipoEmpresaUseCase.execute({
      tem_tipo_empresa,
    });
    return response.status(201).json(tipo_empresa);
  }
}

export { CreateTipoEmpresaController };
