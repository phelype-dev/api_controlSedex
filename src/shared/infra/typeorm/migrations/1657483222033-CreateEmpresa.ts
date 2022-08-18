import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEmpresa1657483222033
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'empresa',
        columns: [
          {
            name: 'emp_codigo',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'emp_cnpj',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_razao_social',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_operacao',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_descricao',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_logradouro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_numero',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'emp_complemento',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_bairro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'emp_cep',
            type: 'int',
            isNullable: false,
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
            name: 'tem_codigo',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCidadeEmpresa',
            referencedTableName: 'cidade',
            referencedColumnNames: ['cid_codigo'],
            columnNames: ['cid_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKUfEmpresa',
            referencedTableName: 'estado',
            referencedColumnNames: ['est_codigo'],
            columnNames: ['est_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKTipoEmpresaDestinatario',
            referencedTableName: 'tipo_empresa',
            referencedColumnNames: ['tem_codigo'],
            columnNames: ['tem_codigo'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('empresa');
  }
}
