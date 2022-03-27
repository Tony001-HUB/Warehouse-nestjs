import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product-report')
export class ProductReportController {
  constructor(private productService: ProductService) {}

  @Post()
  public generateReport(@Body() idArray: string[]) {
    return this.productService.generateReport(idArray);
  }
}
/*
response.map(product => {
 console.log(idArray.includes(product.productId.toString()));
 if(idArray.includes(product.productId.toString())) {
   return {
     product
   }
 } else {
   return {
     id: product.productId,
     info: 'not found'
   }
 }
*/