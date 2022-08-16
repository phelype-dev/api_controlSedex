import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRegiao1657483304768 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'regiao',
        columns: [
          {
            name: 'reg_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'regiao',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('regiao');
  }
}
