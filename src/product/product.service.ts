import { Body, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { ProductDto } from './dto/product.dto';
import { Product } from './model/product.model';
import { IncompleteProduct } from "./model/incompleteProduct.model";
import { FullProduct } from "./model/fullProduct.model";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    @InjectModel(IncompleteProduct) private incompleteProductRepository: typeof IncompleteProduct,
    @InjectModel(FullProduct) private fullProductRepository: typeof FullProduct,
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

  public async generateReport(data: {count: number, title: string}[]) {
    return await this.productRepository.findAll({
      where: {
        title: {
          [Op.or]: data.map(obj => obj.title)
        }
      },
    });
  }

  public async addIncompleteProduct(incompleteProductDto: ProductDto[]) {
    return await this.incompleteProductRepository.bulkCreate(incompleteProductDto);
  }

  public async getIncompleteProduct() {
    return await this.incompleteProductRepository.findAll();
  }

  public async addFullProduct(fullProductDto: ProductDto[]) {
    console.log("[...fullProductDto, ...incompleteProductDto]", fullProductDto);
    return await this.fullProductRepository.bulkCreate(fullProductDto);
  }

  public generateId(len): string {
    let password = "";
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
    for (let i = 0; i < len; i++){
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
  }
}
