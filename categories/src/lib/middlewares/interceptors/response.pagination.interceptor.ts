import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { paginationDefault } from "../../helpers/pagination";

@Injectable()
export class ResponsePaginationInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const ctx = context.switchToHttp();
        const query = ctx.getRequest().query

        return next.handle().pipe(
            map(response => {
                if(!response) {
                    return null
                }

                let page = paginationDefault.page
                if(query.page) {
                    page = parseInt(query.page)
                }

                let limit = paginationDefault.limit
                if(query.limit) {
                    limit = parseInt(query.limit)
                }

                let pagination = {
                    page: page,
                    total: response.count,
                    total_page: Math.ceil(response.count/limit)
                }

                return { message: response.message, data: response.data, pagination: pagination }
            })
        )
    }
}