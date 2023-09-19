import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { statusOK } from "../../helpers/http";

@Injectable()
export class ResponseSuccessInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        
        return next.handle().pipe(
            map(async response => {
                const resp = await response
                
                context.switchToHttp().getResponse().status(200)

                let httpSuccess = statusOK(200, resp)

                if(resp.pagination) {
                    httpSuccess = statusOK(200, resp.data)
                    Object.assign(httpSuccess, { pagination: resp.pagination })
                }
                
                return httpSuccess
            })
        )
    }
}