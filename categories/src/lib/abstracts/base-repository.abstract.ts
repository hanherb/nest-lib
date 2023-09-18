import { GetListCategoryDTO } from "../dto/request.dto";

export abstract class IBaseRepository<T> {
    abstract getList(props: GetListCategoryDTO): Promise<{data: T[], count: number}>;
  
    abstract get(id: string): Promise<T>;
  
    abstract create(item: T): Promise<T>;
  
    abstract update(id: string, item: T): Promise<T>;
}