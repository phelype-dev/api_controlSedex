import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTipoEquipamento1657483284383
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tipo_equipamento',
        columns: [
          {
            name: 'equ_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'equ_tipo',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tipo_equipamento');
  }
}
