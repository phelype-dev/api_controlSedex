import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompaniesUseCase } from './CreateCompaniesUseCase';

class CreateCompaniesController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const {
      emp_cnpj,
      emp_razao_social,
      emp_operacao,
      emp_descricao,
      emp_logradouro,
      emp_numero,
      emp_complemento,
      emp_bairro,
      emp_cep,
      cid_codigo,
      est_codigo,
      tem_codigo,
    } = request.body;

    const createCompaniesUseCase = container.resolve(
      CreateCompaniesUseCase,
    );
    const companies = await createCompaniesUseCase.execute({
      emp_cnpj,
      emp_razao_social,
      emp_operacao,
      emp_descricao,
      emp_logradouro,
      emp_numero,
      emp_complemento,
      emp_bairro,
      emp_cep,
      cid_codigo,
      est_codigo,
      tem_codigo,
    });
    return response.status(201).json(companies);
  }
}

export { CreateCompaniesController };
