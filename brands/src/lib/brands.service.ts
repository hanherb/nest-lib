import { Injectable } from "@nestjs/common";
import { BrandsRepository } from "./brands.repository";
import { Brands } from "./entities/brands.entity";

@Injectable()
export class BrandsService {
    constructor(
        private readonly brandRepository: BrandsRepository
    ) {}

    async getBrand(id: string): Promise<Brands | null> {
        return await this.brandRepository.getOne(id)
    }
}