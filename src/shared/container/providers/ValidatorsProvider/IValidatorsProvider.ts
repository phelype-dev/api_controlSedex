interface IValidatorsProvider {
  ValidatorCNPJ(cnpj: string): boolean;
  ValidatorCEP(cep: number): boolean;
  validationCell(numberCell: string): boolean;
  validationPhone(numberPhone: string): boolean;
}

export { IValidatorsProvider };
