import { Module } from '@nestjs/common';
import { AcquisitionService } from './acquisition.service';
import { AcquisitionController } from './acquisition.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Acquisition } from './model/acquisition.model';

@Module({
  providers: [AcquisitionService],
  controllers: [AcquisitionController],
  imports: [SequelizeModule.forFeature([Acquisition])]
})
export class AcquisitionModule {}
