import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from '../http.strategy';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer', session: true }),
    UserModule,
  ],
  providers: [AuthService, HttpStrategy],
  controllers: [AuthController],
})
export class AuthModule {
}
