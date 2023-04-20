import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT, () => {
    console.info(
      `App Running on port : ${process.env.PORT} - ENV : ${process.env.NODE_ENV}`,
    );
  });
}
bootstrap();
