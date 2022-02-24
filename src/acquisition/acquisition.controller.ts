import { Body, Controller, Get, Post } from '@nestjs/common';
import { AcquisitionService } from './acquisition.service';
import { IAcquisition } from './dto/acquisition.dto';

@Controller('acquisition')
export class AcquisitionController {

    constructor(private acquisitionService: AcquisitionService) {}

    @Post()
    createUser(@Body() acquisition: IAcquisition) {
      return this.acquisitionService.createAcquisition(acquisition);
    }

    @Get()
    getUsers() {
      return this.acquisitionService.getAllAcquisitions();
    }
}
