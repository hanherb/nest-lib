import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsRepository } from './brands.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Brands } from './entities/brands.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Brands
    ]),
  ],
  controllers: [],
  providers: [
    BrandsRepository,
    BrandsService
  ],
  exports: [
    BrandsRepository,
    BrandsService
  ],
})
export class BrandsModule {}
