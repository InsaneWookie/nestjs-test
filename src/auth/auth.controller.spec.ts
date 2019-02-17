import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { Game } from '../entity/game.entity';
import { Machine } from '../entity/machine.entity';
import { GamePlayed } from '../entity/gameplayed.entity';
import { User } from '../entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtStrategy } from '../jwt.strategy';

describe('Auth Controller', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5433,
          username: 'postgres',
          password: 'example',
          database: 'mamebackup',
          // entities: [__dirname + '/**/*.entity{.ts,.js}'],
          entities: [Game, Machine, GamePlayed, User],
          synchronize: false,
          logging: true,
          cli: {
            entitiesDir: "src"
          }
        }),
        JwtModule.register({
          secretOrPrivateKey: 'abc123',
          signOptions: {
            expiresIn: 3600,
          },
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Game, Machine, GamePlayed, User])],
      controllers: [AuthController],
      providers: [AuthService, UserService, JwtStrategy]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
