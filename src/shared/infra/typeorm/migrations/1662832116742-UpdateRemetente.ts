import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateRemetente1662832116742
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "remetente" ADD COLUMN rem_ativo boolean NOT NULL default false
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    ALTER TABLE "remetente" DROP COLUMN rem_ativo
  `);
  }
}
