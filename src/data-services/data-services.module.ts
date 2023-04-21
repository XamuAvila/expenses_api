import { Module } from '@nestjs/common';
import { DatabaseModule } from './sequelize/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [DatabaseModule],
})
export class DataServicesModule {}
