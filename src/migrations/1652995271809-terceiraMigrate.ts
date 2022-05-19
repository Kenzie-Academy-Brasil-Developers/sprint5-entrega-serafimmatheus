import { MigrationInterface, QueryRunner } from "typeorm";

export class terceiraMigrate1652995271809 implements MigrationInterface {
    name = 'terceiraMigrate1652995271809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '"2022-05-19T21:21:13.850Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '"2022-05-19T21:21:13.850Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT '2022-05-19 20:52:51.344'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT '2022-05-19 20:52:51.344'`);
    }

}
