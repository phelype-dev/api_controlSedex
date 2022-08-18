interface ICreateCompaniesDto {
  emp_cnpj: string;
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
  emp_codigo?: string;
}
export { ICreateCompaniesDto };
