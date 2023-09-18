import { CanActivate, ExecutionContext, ForbiddenException, Injectable, InternalServerErrorException } from "@nestjs/common"
import { keyProduction, keyStaging } from "../../helpers/key"

@Injectable()
export class HeaderGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const req = context.switchToHttp().getRequest()

        //probes exception
        if(req.path == "/") {
            return true
        }

        if(!req.headers.version || !req.headers.device || !req.headers.key) {
            throw new ForbiddenException("Forbidden")
        }

        if(!await this.checkKey(process.env['ENV'], req.headers.key)) {
            throw new ForbiddenException("invalid key")
        }

        if(!await this.checkDevice(req.headers.device)) {
            throw new ForbiddenException("invalid device")
        }

        return true
    }

    async checkKey(env: string | undefined, key: string): Promise<boolean> {
        let arrKey: Array<any>
        
        if(env == undefined) {
            throw new InternalServerErrorException()
        }

        if(env == "production") {
            arrKey = keyProduction
        }
        else {
            arrKey = keyStaging
        }

        const foundKey = arrKey.some(val => val.oa_client_id == key)

        if(!foundKey) {
            return false
        }

        return true
    }

    async checkDevice (device: string): Promise<boolean> {
        if(device.length > 1) {
            return false;
        }

        const regex = new RegExp('^[1-3]+$')
        return regex.test(device)
      }
}