import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductReportController } from './product-report.controller';
import { IncompleteProduct } from "./model/incompleteProduct.model";
import { FullProduct } from './model/fullProduct.model';

@Module({
  controllers: [ProductController, ProductReportController],
  providers: [ProductService],
  imports: [SequelizeModule.forFeature([Product, IncompleteProduct, FullProduct])]
})
export class ProductModule {}
