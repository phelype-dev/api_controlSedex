import { Senders } from '@modules/Senders/infra/typeorm/entities/Senders';
import { ICreateSendersRepository } from '@modules/Senders/repository/ICreateSendersRepository';
import { IValidatorsProvider } from '@shared/container/providers/ValidatorsProvider/IValidatorsProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  rem_remetente: string;
  rem_abreviado: string;
  rem_fixo?: string;
  rem_movel: string;
  emp_codigo: string;
}

@injectable()
class CreateSendersUseCase {
  constructor(
    @inject('SendersRepository')
    private senderRepository: ICreateSendersRepository,
    @inject('Validator')
    private validation: IValidatorsProvider,
  ) {}

  async execute({
    rem_remetente,
    rem_abreviado,
    rem_fixo,
    rem_movel,
    emp_codigo,
  }: IRequest): Promise<Senders> {
    const senderAlreadyExists =
      await this.senderRepository.findByNames(rem_remetente);

    const numberCell = this.validation.validationCell(rem_movel);

    const numberPhone = this.validation.validationPhone(rem_fixo);

    if (senderAlreadyExists) {
      throw new AppError(
        'Attention, sender informed already exists in the database',
      );
    }
    if (numberCell) {
      throw new AppError(
        'Attention, mobile number informed and invalid. Check the field and try again',
      );
    }

    if (numberPhone) {
      throw new AppError(
        'Attention, phone number informed and invalid. Check the field and try again',
      );
    }

    const senders = await this.senderRepository.create({
      rem_remetente,
      rem_abreviado,
      rem_fixo,
      rem_movel,
      emp_codigo,
    });
    return senders;
  }
}

export { CreateSendersUseCase };
