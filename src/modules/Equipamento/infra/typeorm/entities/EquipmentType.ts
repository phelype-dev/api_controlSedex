import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tipo_equipamento')
class EquipmentType {
  @PrimaryColumn()
  equ_codigo: string;

  @Column()
  equ_tipo: string;

  constructor() {
    if (!this.equ_codigo) {
      this.equ_codigo = uuidv4();
    }
  }
}

export { EquipmentType };
