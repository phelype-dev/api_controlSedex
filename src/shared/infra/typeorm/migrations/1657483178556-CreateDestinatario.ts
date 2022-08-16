import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDestinatario1657483178556 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'destinatario',
        columns: [
          {
            name: 'desc_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'desc_destinatario',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_aos_cuidados',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_aos_cuidados_abrev',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'desc_cpf',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'desc_logradouro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_numero',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'desc_complemento',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_bairro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_cep',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_fixo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_movel',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_ativo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desc_data_alteracao',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'desc_latitude',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'desc_longitude',
            type: 'varchar',
            isNullable: true,
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
            name: 'emp_codigo',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCidadeDestinatario',
            referencedTableName: 'cidade',
            referencedColumnNames: ['cid_codigo'],
            columnNames: ['cid_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKUfDestinatario',
            referencedTableName: 'estado',
            referencedColumnNames: ['est_codigo'],
            columnNames: ['est_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKTipoEmpresaDestinatario',
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
    await queryRunner.dropTable('destinatario');
  }
}
