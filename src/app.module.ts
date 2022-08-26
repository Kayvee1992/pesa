import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { UserModule } from './User';
import { UserController } from './User/controller/UserController';

@Module({
  imports: [UserModule],
  controllers: [UserController,HealthController],
  providers: [],
})
export class AppModule {}
