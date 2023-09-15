import { Category } from "../entities/category.entity";

export class ResGetListCategoryDTO {
    meta: {
        code: number,
        msg: string
    }
    data: Category[]
}