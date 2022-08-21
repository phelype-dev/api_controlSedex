import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('remetente')
class Senders {
  @PrimaryColumn()
  rem_codigo?: string;

  @Column()
  rem_remetente: string;

  @Column()
  rem_abreviado: string;

  @Column()
  rem_fixo?: string;

  @Column()
  rem_movel: string;

  @Column()
  emp_codigo: string;

  constructor() {
    if (!this.rem_codigo) {
      this.rem_codigo = uuidv4();
    }
  }
}

export { Senders };
