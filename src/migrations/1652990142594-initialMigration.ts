import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1652990142594 implements MigrationInterface {
    name = 'initialMigration1652990142594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2022-05-19T19:55:44.593Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2022-05-19T19:55:44.593Z"', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
