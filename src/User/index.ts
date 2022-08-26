import { Module, Provider } from "@nestjs/common";
import { USER_SERVICE } from "./Constant";
import { UserController } from "./controller/UserController";
import { UserService } from "./service/UserService";

const userServiceProvider:Provider = {
  provide: USER_SERVICE,
  useClass: UserService,
};

@Module({
  imports: [],
  providers: [userServiceProvider],
  controllers: [UserController],
  exports: [userServiceProvider],
})
export class UserModule {}
