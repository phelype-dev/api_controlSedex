import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tipo_empresa')
class TipoEmpresa {
  @PrimaryColumn()
  tem_codigo: string;
  @Column()
  tem_tipo_empresa: string;

  constructor() {
    if (!this.tem_codigo) {
      this.tem_codigo = uuidv4();
    }
  }
}

export { TipoEmpresa };
