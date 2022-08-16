import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRegItem1657483207817 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registro_itens',
        columns: [
          {
            name: 'ips_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'sed_codigo',
            type: 'uuid',
          },
          {
            name: 'tit_codigo',
            type: 'uuid',
          },
          {
            name: 'ips_descricao',
            type: 'varchar',
          },
          {
            name: 'equ_codigo',
            type: 'uuid',
          },
          {
            name: 'ips_codigo_equi',
            type: 'integer',
          },
          {
            name: 'ips_cod_ra',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEquipamentoRegistroItem',
            referencedTableName: 'tipo_item',
            referencedColumnNames: ['tit_codigo'],
            columnNames: ['tit_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registro_itens');
  }
}
