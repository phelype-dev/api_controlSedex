import { ICreateCompaniesDto } from '../dtos/ICreateCompaniesDTO';
import { Companies } from '../infra/typeorm/entities/Companies';

interface ICreateCompaniesRepository {
  create(data: ICreateCompaniesDto): Promise<Companies>;
  findByCNPJ(emp_cnpj: number): Promise<Companies>;
  findByCompanyName(emp_razao_social: string): Promise<Companies>;
  findAllCompanies(): Promise<Companies[]>;
}

export { ICreateCompaniesRepository };
