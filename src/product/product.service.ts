import { Body, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductDto } from './dto/product.dto';
import { Product } from './model/product.model';
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
  ) {}

  public async getAllProducts() {
    return await this.productRepository.findAll();
  }

  public async createProduct(productDto: ProductDto) {
    return await this.productRepository.create(productDto);
  }

  public async deleteProductById(productId: number) {
    return await this.productRepository.destroy({
      where: { productId: +productId },
    });
  }

  public async getProductById(productId: number) {
    return await this.productRepository.findOne({
      where: { productId: +productId },
    });
  }

  public async getProductByTitle(title: string) {
    return await this.productRepository.findAll({ where: { title: title } });
  }

  public async getProductInStock(prodArr: ProductDto) {
    return await this.productRepository.findAll({
      where: { title: [prodArr] },
    });
  }

  public async generateReport(idArray: string[]) {
    return await this.productRepository.findAll({
      where: {
        productId: idArray,
      },
    });
  }
}
