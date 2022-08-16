import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRegSedex1657483195563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registro_sedex',
        columns: [
          {
            name: 'sed_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'sed_data_postagem',
            type: 'date',
          },
          {
            name: 'emp_codigo',
            type: 'uuid',
          },
          {
            name: 'rem_codigo',
            type: 'uuid',
          },
          {
            name: 'cid_codigo',
            type: 'uuid',
          },
          {
            name: 'est_codigo',
            type: 'uuid',
          },
          {
            name: 'des_codigo',
            type: 'uuid',
          },
          {
            name: 'sed_codigo_rastreio',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'sed_valor',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'sed_pago',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'sed_extraviou',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'sed_operador',
            type: 'varchar',
          },
          {
            name: 'sed_data_update',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKRegistroSedexEmpresa',
            referencedTableName: 'empresa',
            referencedColumnNames: ['emp_codigo'],
            columnNames: ['emp_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKRegistroSedexRemetente',
            referencedTableName: 'remetente',
            referencedColumnNames: ['rem_codigo'],
            columnNames: ['rem_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKRegistroSedexCidade',
            referencedTableName: 'cidade',
            referencedColumnNames: ['cid_codigo'],
            columnNames: ['cid_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKRegistroSedexUF',
            referencedTableName: 'estado',
            referencedColumnNames: ['est_codigo'],
            columnNames: ['est_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKRegistroSedexDestinatario',
            referencedTableName: 'destinatario',
            referencedColumnNames: ['desc_codigo'],
            columnNames: ['des_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registro_sedex');
  }
}
