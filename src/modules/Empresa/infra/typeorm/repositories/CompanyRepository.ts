import { ICreateCompaniesDto } from '@modules/Empresa/dtos/ICreateCompaniesDTO';
import { ICreateCompaniesRepository } from '@modules/Empresa/repositories/IcreateCompaniesRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { Companies } from '../entities/Companies';

class CompanyRepository implements ICreateCompaniesRepository {
  private repositories: Repository<Companies>;
  constructor() {
    this.repositories = dataSource.getRepository(Companies);
  }

  async create({
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
  }: ICreateCompaniesDto): Promise<Companies> {
    const companies = this.repositories.create({
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
    this.repositories.save(companies);
    return companies;
  }
  async findByCNPJ(emp_cnpj: string): Promise<Companies> {
    const companyCnpj = this.repositories.findOneBy({
      emp_cnpj,
    });
    return companyCnpj;
  }
  findByCompanyName(emp_razao_social: string): Promise<Companies> {
    const company = this.repositories.findOneBy({
      emp_razao_social,
    });
    return company;
  }
  findAllCompanies(): Promise<Companies[]> {
    const companyAll = this.repositories.find();
    return companyAll;
  }
}

export { CompanyRepository };
