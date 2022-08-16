import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRemetente1657483231655 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'remetente',
        columns: [
          {
            name: 'rem_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'rem_remetente',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rem_abreviado',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rem_fixo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rem_movel',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_codigo',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'FKRemetenteEmpresa',
            referencedTableName: 'empresa',
            referencedColumnNames: ['emp_codigo'],
            columnNames: ['emp_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('remetente');
  }
}
