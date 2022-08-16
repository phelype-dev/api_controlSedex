import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCidade1657483239528 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cidade',
        columns: [
          {
            name: 'cid_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'municipio',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'estado_id',
            type: 'uuid',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            //Nome da FK//
            name: 'FKEstadoCidade',
            //Tabela referenciada//
            referencedTableName: 'estado',
            //referencia da coluna id da table referenciada//
            referencedColumnNames: ['est_codigo'],
            //Coluna da table que recebera o id da table referenciada//
            columnNames: ['estado_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cidade');
  }
}
