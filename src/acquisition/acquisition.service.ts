import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IAcquisition } from './dto/acquisition.dto';
import { Acquisition } from './model/acquisition.model';

@Injectable()
export class AcquisitionService {
    constructor(@InjectModel(Acquisition) private acquisitionRepository: typeof Acquisition) {}

    public async getAllAcquisitions() {
        return await this.acquisitionRepository.findAll();
    }

    public async createAcquisition(acquisition: IAcquisition) {
        return await this.acquisitionRepository.create(acquisition);
    }
}
