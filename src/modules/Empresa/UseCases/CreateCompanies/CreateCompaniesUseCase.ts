import { Companies } from '@modules/Empresa/infra/typeorm/entities/Companies';
import { ICreateCompaniesRepository } from '@modules/Empresa/repositories/IcreateCompaniesRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  emp_cnpj: number;
  emp_razao_social: string;
  emp_operacao: string;
  emp_descricao: string;
  emp_logradouro: string;
  emp_numero: number;
  emp_complemento: string;
  emp_bairro: string;
  emp_cep: number;
  cid_codigo: string;
  est_codigo: string;
  tem_codigo: string;
}

@injectable()
class CreateCompaniesUseCase {
  constructor(
    @inject('CompanyRepository')
    private companiesRepository: ICreateCompaniesRepository,
  ) {}

  async execute({
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
  }: IRequest): Promise<Companies> {
    const companyAlreadyExists =
      this.companiesRepository.findByCNPJ(emp_cnpj);

    if (companyAlreadyExists) {
      throw new AppError('Company already exists');
    }

    const companies = await this.companiesRepository.create({
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
    return companies;
  }
}
export { CreateCompaniesUseCase };
