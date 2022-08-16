import { ICreateCityDTO } from '../dtos/ICreateCityDTO';
import { City } from '../infra/typeorm/entities/City';

interface ICityRepository {
  create(data: ICreateCityDTO): Promise<City>;
}
export { ICityRepository };
