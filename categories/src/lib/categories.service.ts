import { Injectable } from "@nestjs/common";
import { IDataServices } from "./abstracts/data-service.abstract";
import { GetListCategoryDTO } from "./dto/request.dto";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoriesService {
    constructor(
        private readonly dataServices: IDataServices
    ) {}

    async getListCategory(props: GetListCategoryDTO): Promise<Category[]>  {
        return await this.dataServices.category.getList(props)
    }
}