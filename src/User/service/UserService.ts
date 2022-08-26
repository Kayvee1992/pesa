import { Logger } from "@nestjs/common";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
    private readonly logger: Logger = new Logger(UserService.name);
    constructor(){}
    public async createUser() {
        return {
            user:"Success!"
        }
    }
}