import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { join } from 'path';
declare const module: any;

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: 'a secret',
    name: 'abcd',
    resave: true,
    saveUninitialized: true,
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: null }
  }));

  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
