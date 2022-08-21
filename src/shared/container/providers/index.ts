import { container } from 'tsyringe';
import { Validator } from './ValidatorsProvider/implementations/Valitadions';
import { IValidatorsProvider } from './ValidatorsProvider/IValidatorsProvider';

container.registerSingleton<IValidatorsProvider>(
  'Validator',
  Validator,
);
