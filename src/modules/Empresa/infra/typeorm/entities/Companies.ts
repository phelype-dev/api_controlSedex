import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('empresa')
class Companies {
  @PrimaryColumn()
  emp_codigo: string;

  @Column()
  emp_cnpj: string;

  @Column()
  emp_razao_social: string;

  @Column()
  emp_operacao: string;

  @Column()
  emp_descricao: string;

  @Column()
  emp_logradouro: string;

  @Column()
  emp_numero: number;

  @Column()
  emp_complemento: string;

  @Column()
  emp_bairro: string;

  @Column()
  emp_cep: number;

  @Column()
  cid_codigo: string;

  @Column()
  est_codigo: string;

  @Column()
  tem_codigo: string;

  constructor() {
    if (!this.emp_codigo) {
      this.emp_codigo = uuidv4();
    }
  }
}

export { Companies };
