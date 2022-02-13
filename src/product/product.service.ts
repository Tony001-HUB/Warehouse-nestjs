import { Body, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductDto } from './dto/product.dto';
import { Product } from './model/product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product) private productRepository: typeof Product) {}

    public async getAllNews() {
        return await this.productRepository.findAll();
    }

    public async createProduct(productDto: ProductDto) {
        return await this.productRepository.create(productDto);
    }
}
