import { GetListCategoryDTO } from "../dto";

export abstract class ICategoryService<T> {
    abstract getList(props: GetListCategoryDTO): Promise<T[]>
}