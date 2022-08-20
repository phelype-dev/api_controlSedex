import { Companies } from '@modules/Empresa/infra/typeorm/entities/Companies';
import { ICreateCompaniesRepository } from '@modules/Empresa/repositories/IcreateCompaniesRepository';
import { IValidatorsProvider } from '@shared/container/providers/ValidatorsProvider/IValidatorsProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  emp_cnpj: string;
  emp_razao_social: string;
  emp_operacao?: string;
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
    @inject('ValidatorCNPJ')
    private validator: IValidatorsProvider,
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
    const companyAlreadyExistsCnpj =
      await this.companiesRepository.findByCNPJ(emp_cnpj);

    const verificationResult = this.validator.ValidatorCNPJ(emp_cnpj);
    const verificationCEP = this.validator.ValidatorCEP(emp_cep);

    const companyAlreadyExistsName =
      await this.companiesRepository.findByCompanyName(
        emp_razao_social,
      );

    if (verificationResult === false) {
      throw new AppError(
        `Heads up ! CNPJ: ${emp_cnpj} entered does not correspond to a valid value. Please check and try again!`,
      );
    }

    if (verificationCEP === false) {
      throw new AppError(
        `Heads up ! CEP: ${emp_cep} entered does not correspond to a valid value. Please check and try again!`,
      );
    }

    if (companyAlreadyExistsCnpj) {
      throw new AppError(
        `Heads up ! There is already a company with this CNPJ: ${emp_cnpj}`,
      );
    }

    if (companyAlreadyExistsName) {
      throw new AppError(
        'Heads up ! There is already a company with that name',
      );
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
