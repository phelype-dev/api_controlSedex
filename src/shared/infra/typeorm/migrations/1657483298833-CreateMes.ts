import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMes1657483298833 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mes',
        columns: [
          {
            name: 'mes_codigo',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'mes_sistema',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mes_text',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('mes');
  }
}
