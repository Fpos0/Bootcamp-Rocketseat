import {MigrationInterface, QueryRunner,TableColumn,TableForeignKey} from "typeorm";

export class AlterProviderFieldToProviderId1605542398769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('appointments','provider');
      //dropar a columa provider para atualizarmos o nome para provider_id
      await queryRunner.addColumn(
        'appointments',
        new TableColumn({
          name: 'provider_id',
          type: 'uuid',
          isNullable: true,
        }),
      );

      await queryRunner.createForeignKey('appointments',new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('appointments','AppointmentProvider');

      await queryRunner.dropColumn('appointments','provider_id');

      await queryRunner.addColumn(
        'appointments',
        new TableColumn({
          name: 'provider',
          type: 'varchar',
        }),
      );
    }
}
