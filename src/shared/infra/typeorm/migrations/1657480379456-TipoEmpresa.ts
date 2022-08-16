import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TipoEmpresa1657480379456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tipo_empresa',
        columns: [
          {
            name: 'tem_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'tem_tipo_empresa',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tipo_empresa');
  }
}
