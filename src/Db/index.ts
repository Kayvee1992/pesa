import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_SCHEMA_NAME'),
          entities: [
            __dirname + '/../**/*.entity.ts',
            __dirname + '/../**/*.entity.js',
          ],
          synchronize: true,
          logging: ['error', 'info', 'query'],
          namingStrategy: new SnakeNamingStrategy(),
        }),
      }),
    ],
  })
  export class DatabaseModule {}
  