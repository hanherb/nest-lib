import { IsOptional } from "class-validator";

export class GetListCategoryDTO {
    @IsOptional()
    id: string

    @IsOptional()
    slug: string
}