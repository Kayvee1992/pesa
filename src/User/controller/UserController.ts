import {
    Controller,
    Body,
    Put,
    Get,
    Inject,
    Logger,
    Param,
    Query,
    UseGuards,
    Res,
    Post,
    Patch,
    Req,
} from "@nestjs/common";
import { USER_SERVICE } from "../Constant";
import { IUserService } from "../service/IUserService";

@Controller("/api/v1/user")
export class UserController {
    private readonly logger: Logger = new Logger(UserController.name);
    constructor(
        @Inject(USER_SERVICE)
        private readonly userService:IUserService
    ) {}
    @Post("/")
    async createUser(): Promise<any> {
        return this.userService.createUser()
    }
}
