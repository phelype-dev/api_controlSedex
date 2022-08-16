import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTipoItem1657483255055
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tipo_item',
        columns: [
          {
            name: 'tit_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'tit_tipo_item',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tipo_item');
  }
}
