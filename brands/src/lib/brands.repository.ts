import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Brands } from "./entities/brands.entity";

@Injectable()
export class BrandsRepository {
    constructor(
        @InjectRepository(Brands)
        private readonly brandRepository: Repository<Brands>
    ) {}

    async getOne(id: string): Promise<Brands | null> {
        return await this.brandRepository.findOne({
            where: {
                id: id
            }
        })
    }
}