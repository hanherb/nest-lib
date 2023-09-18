import { GetListCategoryDTO } from "../../dto";
import { QueryRepository } from "../base-query";

export class CategoryQueryRepository extends QueryRepository {
    async where(query: Object, props: GetListCategoryDTO) {
        if(props.type) {
            Object.assign(query, {
                where: {
                    type: props.type
                }
            })
        }

        return query
    }
}