import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/model/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/model/product.model';
import { AcquisitionModule } from './acquisition/acquisition.module';
import { Acquisition } from './acquisition/model/acquisition.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'QwQ12345_q',
      database: 'warehouse',
      models: [Users, Product, Acquisition],
<<<<<<< HEAD
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    AcquisitionModule,
  ],
=======
      autoLoadModels: true
    }),    
    UsersModule, AuthModule, ProductModule, AcquisitionModule],
>>>>>>> 1efde9d5eb10719d158a4cd80e2df4ac813b5786
  controllers: [],
  providers: [],
})
export class AppModule {}
