import { City } from '@modules/City/infra/typeorm/entities/City';
import { TipoEmpresa } from '@modules/Empresa/infra/typeorm/entities/TipoEmpresa';
import { EquipmentType } from '@modules/Equipamento/infra/typeorm/entities/EquipmentType';
import { Estado } from '@modules/Estado/infra/typeorm/entities/Estados';
import { TipoItems } from '@modules/Item/infra/typeorm/entities/ItemTipo';
import { DataSource } from 'typeorm';
import { TipoEmpresa1657480379456 } from './migrations/1657480379456-TipoEmpresa';
import { CreateCidade1657483239528 } from './migrations/1657483239528-CreateCidade';
import { CreateEstado1657483248100 } from './migrations/1657483248100-CreateEstado';
import { CreateTipoItem1657483255055 } from './migrations/1657483255055-CreateTipoItem';
import { CreateTipoEquipamento1657483284383 } from './migrations/1657483284383-CreateTipoEquipamento';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234567890',
  database: 'controlesedex',
  entities: [Estado, City, TipoEmpresa, TipoItems, EquipmentType],
  migrations: [
    CreateEstado1657483248100,
    CreateTipoEquipamento1657483284383,
    CreateCidade1657483239528,
    TipoEmpresa1657480379456,
    CreateTipoItem1657483255055,
  ],
});
