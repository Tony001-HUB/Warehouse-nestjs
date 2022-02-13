import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/model/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/model/product.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'QwQ12345_q',
      database: 'warehouse',
      models: [Users, Product],
      autoLoadModels: true
    }),    
    UsersModule, AuthModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
