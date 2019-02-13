import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from '../http.strategy';
// import { UsersModule } from '../users/users.module';
import { AppModule } from "../app.module";
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  providers: [AuthService, HttpStrategy],
  controllers: [AuthController],
})
export class AuthModule {}