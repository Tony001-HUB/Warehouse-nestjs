import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {}

  @Get()
  public getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post()
  public createProduct(@Body() productDto: ProductDto) {
    return this.productService.createProduct(productDto);
  }

  /*
  @Post("/test")
  public createProduct1(@Body() productDto: ProductDto) {
    return this.productService.createProduct(productDto);
  }
   */

  @Delete('/:id')
  public deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProductById(+id);
  }

  @Get('/:id')
  public getProductById(@Param('id') id: string) {
    return this.productService.getProductById(+id);
  }

  /*
  @Get('/by/title/:title')
  public getProductById1(@Param('title') id: string) {
    return this.productService.getProductById(+id);
  }
   */

  @Put()
  public getProductInStock(@Body() prodArr: ProductDto) {
    return this.productService.getProductInStock(prodArr);
  }
}
