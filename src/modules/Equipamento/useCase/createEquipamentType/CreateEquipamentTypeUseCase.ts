import { IEquipamentTypesRepository } from '@modules/Equipamento/repositories/IEquipamentTypesRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  equ_tipo: string;
}

@injectable()
class CreateEquipamentTypeUseCase {
  constructor(
    @inject('EquipamentTypeRepository')
    private equipamentRepository: IEquipamentTypesRepository,
  ) {}

  async execute({ equ_tipo }: IRequest) {
    const equipamentAlreadyExist =
      await this.equipamentRepository.findByName(equ_tipo);

    if (equipamentAlreadyExist) {
      throw new AppError('Equipament already exists');
    }

    const equipament = await this.equipamentRepository.create({
      equ_tipo,
    });
    return equipament;
  }
}

export { CreateEquipamentTypeUseCase };
