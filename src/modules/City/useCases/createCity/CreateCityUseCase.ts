import { City } from '@modules/City/infra/typeorm/entities/City';
import { ICityRepository } from '@modules/City/repositories/ICityRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  municipio: string;
  estado_id: string;
}

@injectable()
class CreateCityUseCase {
  constructor(
    @inject('CityRepository')
    private cityRepository: ICityRepository,
  ) {}

  async execute({ municipio, estado_id }: IRequest): Promise<City> {
    const city = await this.cityRepository.create({
      municipio,
      estado_id,
    });
    return city;
  }
}
export { CreateCityUseCase };
