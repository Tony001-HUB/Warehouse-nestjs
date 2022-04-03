import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/model/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/model/product.model';
import { AcquisitionModule } from './acquisition/acquisition.module';
import { Acquisition } from './acquisition/model/acquisition.model';
import { IncompleteProduct } from "./product/model/incompleteProduct.model";
import { FullProduct } from './product/model/fullProduct.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'QwQ12345_q',
      database: 'warehouse',
      models: [Users, Product, Acquisition, IncompleteProduct, FullProduct],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    AcquisitionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
