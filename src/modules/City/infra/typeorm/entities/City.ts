import { Estado } from '@modules/Estado/infra/typeorm/entities/Estados';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('cidade')
class City {
  @PrimaryColumn()
  cid_codigo: string;

  @Column()
  municipio: string;

  @ManyToOne(() => Estado)
  @JoinColumn({ name: 'estado_id' })
  estado: Estado;

  @Column()
  estado_id: string;

  constructor() {
    if (!this.cid_codigo) {
      this.cid_codigo = uuidv4();
    }
  }
}
export { City };
