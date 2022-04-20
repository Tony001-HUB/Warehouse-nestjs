import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductService } from './product.service';
import { zip } from "rxjs";
import { ProductDto } from "./dto/product.dto";

@Controller('product-report')
export class ProductReportController {
  constructor(private productService: ProductService) {}

  @Get()
  public getAllIncompleteProducts() {
    return this.productService.getIncompleteProduct();
  }

  @Get('/full-product')
  public getAllFullProduct() {
    return this.productService.getFullProduct();
  }

  @Get('/full/:transactionId')
  public getFullProductByTransactionId(@Param('transactionId') transactionId: string) {
    return this.productService.getFullProductByTransactionId(transactionId);
  }

  @Get('/incomplete/:transactionId')
  public getIncompleteProductByTransactionId(@Param('transactionId') transactionId: string) {
    return this.productService.getIncompleteProductByTransactionId(transactionId);
  }

  @Post("add/IncompleteFullInDB") addIncompleteFullInDB(@Body() data: {incomplete: ProductDto[], full: ProductDto[]}) {
    this.productService.addIncompleteProduct([...data.incomplete]).then();
    this.productService.addFullProduct([...data.full]).then();
  }

  @Post()
  public generateReport(@Body() idArray: {count: number, title: string}[]) {
    let transactionId = this.productService.generateId(30);
    let fullArr = [];
    let incompleteCounterArr = [];
    let goodsDoNotExist = [];

    return Promise.all([this.productService.generateReport(idArray), this.productService.getAllProducts()])
      .then(values => {
        const [promiseGenerateReport, promiseGetAllProducts] = values;
        goodsDoNotExist = idArray.filter(({ title: titleF }) => !promiseGetAllProducts.some(({ title: titleS }) => titleF === titleS));


        for (let i = 0; i < idArray.length; i++) {
          for (let x = 0; x < promiseGenerateReport.length; x++) {
            if (idArray[i].title.toLowerCase() === promiseGenerateReport[x].title.toLowerCase() && idArray[i].count >= promiseGenerateReport[x].counter) {
              promiseGenerateReport[x]['dataValues']['transactionId'] = transactionId;
              promiseGenerateReport[x]['dataValues']['insufficiency'] = idArray[i].count - promiseGenerateReport[x].counter;
              incompleteCounterArr.push(promiseGenerateReport[x]);
            }
            if (idArray[i].title.toLowerCase() === promiseGenerateReport[x].title.toLowerCase() && idArray[i].count < promiseGenerateReport[x].counter) {
              promiseGenerateReport[x]['dataValues']['transactionId'] = transactionId;
              promiseGenerateReport[x]['dataValues']['insufficiency'] = 0;
              fullArr.push(promiseGenerateReport[x]);
            }
          }
        }
      })
      .then(res => ([
      {type: "full", data: [...fullArr]},
      {type: "incomplete", data: [...incompleteCounterArr]},
      {type: "goodsDoNotExist", data: [...goodsDoNotExist]}
    ]));
  }
}
