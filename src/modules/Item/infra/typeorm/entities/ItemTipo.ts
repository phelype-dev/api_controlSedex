import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tipo_item')
class TipoItems {
  @PrimaryColumn()
  tit_codigo: string;
  @Column()
  tit_tipo_item: string;

  constructor() {
    if (!this.tit_codigo) {
      this.tit_codigo = uuidv4();
    }
  }
}

export { TipoItems };
