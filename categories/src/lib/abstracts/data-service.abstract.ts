import { Category } from "../entities/category.entity";
import { IBaseRepository } from "./base-repository.abstract";

export abstract class IDataServices {
    abstract category: IBaseRepository<Category>
}