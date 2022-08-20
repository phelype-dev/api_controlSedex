interface IValidatorsProvider {
  ValidatorCNPJ(cnpj: string): boolean;
  ValidatorCEP(cep: number): boolean;
}

export { IValidatorsProvider };
