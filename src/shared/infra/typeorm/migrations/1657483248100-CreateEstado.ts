import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEstado1657483248100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'estado',
        columns: [
          {
            name: 'est_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'estado',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'sigla_est',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('estado');
  }
}
