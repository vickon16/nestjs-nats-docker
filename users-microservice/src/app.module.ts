import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "./entities";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      entities,
      database: "nestjs_microservices_db",
      synchronize: true,
      username: "root",
      password: "Password123!",
    }),
    UsersModule,
  ],
})
export class AppModule {}
