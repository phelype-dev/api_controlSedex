import { ICreateCityDTO } from '@modules/City/dtos/ICreateCityDTO';
import { ICityRepository } from '@modules/City/repositories/ICityRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/City';

class CityRepository implements ICityRepository {
  private repositories: Repository<City>;
  constructor() {
    this.repositories = dataSource.getRepository(City);
  }

  async create({
    municipio,
    estado_id,
  }: ICreateCityDTO): Promise<City> {
    const city = this.repositories.create({
      municipio,
      estado_id,
    });
    this.repositories.save(city);
    return city;
  }
}
export { CityRepository };
