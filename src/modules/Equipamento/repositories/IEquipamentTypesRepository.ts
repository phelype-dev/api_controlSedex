import { ICreateEquipamentTypesDTO } from '../dtos/ICreateEquipamentTypesDTO';
import { EquipmentType } from '../infra/typeorm/entities/EquipmentType';

interface IEquipamentTypesRepository {
  create(data: ICreateEquipamentTypesDTO): Promise<EquipmentType>;
  findByName(equ_tipo: string): Promise<EquipmentType>;
}

export { IEquipamentTypesRepository };
