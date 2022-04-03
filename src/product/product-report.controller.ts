import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from './product.service';

@Controller('product-report')
export class ProductReportController {
  constructor(private productService: ProductService) {}

  @Get()
  public getAllIncompleteProducts() {
    return this.productService.getIncompleteProduct();
  }


  @Post()
  public generateReport(@Body() idArray: {count: number, title: string}[]) {
    let transactionId = this.productService.generateId(45);
    let fullArr = [];
    let incompleteCounterArr = [];
    return this.productService.generateReport(idArray).then(res => {
      for (let i = 0; i < idArray.length; i++) {
        for (let x = 0; x < res.length; x++) {
          if (idArray[i].title === res[x].title && idArray[i].count >= res[x].counter) {
            res[x]['dataValues']['transactionId'] = transactionId;
            res[x]['dataValues']['insufficiency'] = idArray[i].count - res[x].counter;
            incompleteCounterArr.push(res[x]);
          }
          if (idArray[i].title === res[x].title && idArray[i].count < res[x].counter) {
            res[x]['dataValues']['transactionId'] = transactionId;
            res[x]['dataValues']['insufficiency'] = 0;
            fullArr.push(res[x]);
          }
        }
      }
    })
      .then(res => {
        this.productService.addIncompleteProduct(incompleteCounterArr.map(data => data.dataValues))
        this.productService.addFullProduct([...fullArr.map(data => data.dataValues), ...incompleteCounterArr.map(data => data.dataValues)]);
      })
      .then(res => ([{type: "full", data: [...fullArr, ...incompleteCounterArr]}, {type: "incomplete", data: [...incompleteCounterArr]}]));
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