export interface ESHits<T> {
    _index: string,
    _type: string,
    _id: string,
    _score: number,
    _source: T
}

export interface ESQuery {
    query?: {
        bool?: {
            must?: ESField[]
            must_not?: ESField[]
            filter?: ESField[]
            should?: ESField[]
        }
        range?: any
    }
}

export interface ESField {
    match?: Object
    match_all?: Object
    term?: Object
    range?: Object
    regexp?: Object
    match_phrase_prefix?: Object
}