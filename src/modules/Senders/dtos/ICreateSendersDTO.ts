interface ICreateSendersDTO {
  rem_codigo?: string;
  rem_remetente: string;
  rem_abreviado: string;
  rem_fixo?: string;
  rem_movel: string;
  emp_codigo: string;
  rem_ativo: boolean;
}

export { ICreateSendersDTO };
