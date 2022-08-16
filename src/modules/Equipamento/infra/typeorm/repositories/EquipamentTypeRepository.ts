import { ICreateEquipamentTypesDTO } from '@modules/Equipamento/dtos/ICreateEquipamentTypesDTO';
import { IEquipamentTypesRepository } from '@modules/Equipamento/repositories/IEquipamentTypesRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { EquipmentType } from '../entities/EquipmentType';

class EquipamentTypeRepository implements IEquipamentTypesRepository {
  private repository: Repository<EquipmentType>;
  constructor() {
    this.repository = dataSource.getRepository(EquipmentType);
  }

  async create({
    equ_tipo,
  }: ICreateEquipamentTypesDTO): Promise<EquipmentType> {
    const equipament = this.repository.create({
      equ_tipo,
    });
    this.repository.save(equipament);
    return equipament;
  }
  findByName(equ_tipo: string): Promise<EquipmentType> {
    const equipament = this.repository.findOneBy({
      equ_tipo,
    });
    return equipament;
  }
}

export { EquipamentTypeRepository };
