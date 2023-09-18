import { IsOptional } from "class-validator";
import { paginationDefault } from "../helpers/pagination";

export class GetListCategoryDTO {
    @IsOptional()
    type?: string

    @IsOptional()
    sort?: string = paginationDefault.sort

    @IsOptional()
    order?: string = paginationDefault.order
    
    @IsOptional()
    page?: number = paginationDefault.page

    @IsOptional()
    limit?: number = paginationDefault.limit
}