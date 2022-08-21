import { container } from 'tsyringe';
import { TipoEmpresaRepository } from '@modules/Empresa/infra/typeorm/repositories/TipoEmpresaRepository';
import { ITipoEmpresaRepository } from '@modules/Empresa/repositories/ICreateTipoEmpresaRepository';
import { ITipoItemRepository } from '@modules/Item/repositories/ITipoItemRepository';
import { TipoItemRepository } from '@modules/Item/infra/typeorm/repositories/TipoItemRepository';
import { ICreateEstadoRepository } from '@modules/Estado/repository/ICreateEstadoRepository';
import { EstadoRepository } from '@modules/Estado/infra/typeorm/repositories/EstadoRepository';
import { ICityRepository } from '@modules/City/repositories/ICityRepository';
import { CityRepository } from '@modules/City/infra/typeorm/repositories/CitysRepository';
import { IEquipamentTypesRepository } from '@modules/Equipamento/repositories/IEquipamentTypesRepository';
import { EquipamentTypeRepository } from '@modules/Equipamento/infra/typeorm/repositories/EquipamentTypeRepository';
import { ICreateCompaniesRepository } from '@modules/Empresa/repositories/IcreateCompaniesRepository';
import { CompanyRepository } from '@modules/Empresa/infra/typeorm/repositories/CompanyRepository';
import '@shared/container/providers';
import { ICreateSendersRepository } from '@modules/Senders/repository/ICreateSendersRepository';
import { SendersRepository } from '@modules/Senders/infra/typeorm/repositories/SendersRepository';

container.registerSingleton<ITipoEmpresaRepository>(
  'TipoEmpresaRepository',
  TipoEmpresaRepository,
);

container.registerSingleton<ITipoItemRepository>(
  'TipoItemRepository',
  TipoItemRepository,
);

container.registerSingleton<ICreateEstadoRepository>(
  'EstadoRepository',
  EstadoRepository,
);

container.registerSingleton<ICityRepository>(
  'CityRepository',
  CityRepository,
);

container.registerSingleton<IEquipamentTypesRepository>(
  'EquipamentTypeRepository',
  EquipamentTypeRepository,
);

container.registerSingleton<ICreateCompaniesRepository>(
  'CompanyRepository',
  CompanyRepository,
);

container.registerSingleton<ICreateSendersRepository>(
  'SendersRepository',
  SendersRepository,
);
