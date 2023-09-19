export class QueryRepository {
    async sort(query: Object, props: any) {
        if(props.sort && props.order) {
            Object.assign(query, { 
                order: {
                    [props.sort]: props.order.toLowerCase() === 'asc' 
                    ? 'ASC' : 'DESC'
                }
            })
        }

        return query
    }

    async pagination(query: Object, props: any) {
        if(props.limit) {
            Object.assign(query, { take: props.limit })
        }
        if(props.page) {
            Object.assign(query, { skip: (props.page-1) * props.limit })
        }

        return query
    }
}