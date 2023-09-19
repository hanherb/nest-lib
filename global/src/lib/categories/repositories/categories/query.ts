import { QueryRepository } from "../../../global/repositories/base-query";
import { GetListCategoryDTO } from "../../dto";

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