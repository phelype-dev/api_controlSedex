import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('estado')
class Estado {
  @PrimaryColumn()
  est_codigo: string;

  @Column()
  estado: string;

  @Column()
  sigla_est: string;

  constructor() {
    if (!this.est_codigo) {
      this.est_codigo = uuidv4();
    }
  }
}

export { Estado };
