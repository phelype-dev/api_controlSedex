import { City } from '@modules/City/infra/typeorm/entities/City';
import { TipoEmpresa } from '@modules/Empresa/infra/typeorm/entities/TipoEmpresa';
import { EquipmentType } from '@modules/Equipamento/infra/typeorm/entities/EquipmentType';
import { Estado } from '@modules/Estado/infra/typeorm/entities/Estados';
import { TipoItems } from '@modules/Item/infra/typeorm/entities/ItemTipo';
import { Senders } from '@modules/Senders/infra/typeorm/entities/Senders';
import { DataSource } from 'typeorm';
import { Companies } from '../../../modules/Empresa/infra/typeorm/entities/Companies';
import { TipoEmpresa1657480379456 } from './migrations/1657480379456-TipoEmpresa';
import { CreateEmpresa1657483222033 } from './migrations/1657483222033-CreateEmpresa';
import { CreateRemetente1657483231655 } from './migrations/1657483231655-CreateRemetente';
import { CreateCidade1657483239528 } from './migrations/1657483239528-CreateCidade';
import { CreateEstado1657483248100 } from './migrations/1657483248100-CreateEstado';
import { CreateTipoItem1657483255055 } from './migrations/1657483255055-CreateTipoItem';
import { CreateTipoEquipamento1657483284383 } from './migrations/1657483284383-CreateTipoEquipamento';
import { UpdateRemetente1662832116742 } from './migrations/1662832116742-UpdateRemetente';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234567890',
  database: 'controlesedex',
  entities: [
    Estado,
    City,
    TipoEmpresa,
    TipoItems,
    EquipmentType,
    Companies,
    Senders,
  ],
  migrations: [
    CreateEstado1657483248100,
    CreateCidade1657483239528,
    CreateTipoEquipamento1657483284383,
    TipoEmpresa1657480379456,
    CreateTipoItem1657483255055,
    CreateEmpresa1657483222033,
    CreateRemetente1657483231655,
    UpdateRemetente1662832116742,
  ],
});
