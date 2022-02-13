import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    public getAllNews() {
      return this.productService.getAllNews();
    }

    @Post()
    public createNews(@Body() productDto: ProductDto) {
        return this.productService.createProduct(productDto);
    }
}
