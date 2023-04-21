import { Controller, Get } from '@nestjs/common';
import { AppUseCases } from 'src/use-cases/app/app.use-case';

@Controller()
export class AppController {
  constructor(private readonly appUseCases: AppUseCases) {}

  @Get()
  healthCheck(): string {
    return this.appUseCases.healthCheck();
  }
}
