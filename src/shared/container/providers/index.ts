import { container } from 'tsyringe';
import { ValidatorCNPJ } from './ValidatorsProvider/implementations/ValitadorCpnj';
import { IValidatorsProvider } from './ValidatorsProvider/IValidatorsProvider';

container.registerSingleton<IValidatorsProvider>(
  'ValidatorCNPJ',
  ValidatorCNPJ,
);
