import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { UserModule } from './User';
import { UserController } from './User/controller/UserController';
import { DatabaseModule } from './Db';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [UserController,HealthController],
  providers: [],
})
export class AppModule {}
