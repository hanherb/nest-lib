export class BaseSearchRepository {

    async paginate(from: number, size: number) {
        return {
            from: from,
            size: size
        }
    }

    async sort(sort: string, order: string) {
        return {
            sort: [{
                [sort]: {
                    order: order
                }
            }]
        }
    }

    async findLike(props: { [key: string]: any }) {
        const must = []

        for (let key in props) {
            must.push({
                match_phrase_prefix: { [key]: props[key] }
            })
        }
        
        return must
    }

    async regexp(key: string, regexp: string) {
        return {
            regexp: {
                [key]: {
                    value: regexp
                }
            }
        }
    }

    async mustNot(props: { [key: string]: any }) {
        const mustNot = []

        for(const key in props) {
            let action = "match"

            if(key === "field") {
                action = "exists"
            }
                
            mustNot.push({
                [action]: {
                    [key]: props[key] 
                }
            })
        }

        return mustNot
    }

    async range(key: string, range: { [key: string]: any }) {
        return {
            range: {
                [key]: range
            }
        }
    }

    // PRIVATE METHODS

    private async dateRangeQuery(key: string, value: string) {
        let query = {}

        if(key === "date_start") {
            value = value.replace(" ", "T")
            query = {
                range: {
                    created_at: {
                        gte: value
                    }
                }
            }
        }
        if(key === "date_end") {
            value = value.replace(" ", "T")
            query = {
                range: {
                    created_at: {
                        lte: value
                    }
                }
            }
        }

        return query
    }
}
