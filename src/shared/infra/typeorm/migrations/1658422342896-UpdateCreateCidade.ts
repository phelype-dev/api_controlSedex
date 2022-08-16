import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCreateCidade1658422342896
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cidade"
      ALTER COLUMN cid_codigo TYPE uuid USING (uuid_generate_v4())`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cidade"
      ALTER COLUMN cid_codigo TYPE varchar(255)`,
    );
  }
}
