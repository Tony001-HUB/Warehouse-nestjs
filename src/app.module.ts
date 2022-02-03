import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/model/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'QwQ12345_q',
      database: 'warehouse',
      models: [Users],
      autoLoadModels: true
    }),    
    UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
