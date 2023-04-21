import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { AppUseCases } from './use-cases/app/app.use-case';
import { UserUseCasesModule } from './use-cases/user/user.use-cases.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserUseCasesModule],
  controllers: [AppController],
  providers: [AppUseCases],
})
export class AppModule {}
