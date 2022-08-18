interface IValidatorsProvider {
  ValidatorCNPJ(cnpj: string): boolean;
  ValidatorCEP(cep: number): number;
}

export { IValidatorsProvider };
