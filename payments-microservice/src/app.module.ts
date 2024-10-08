import { Module } from "@nestjs/common";
import { PaymentsModule } from "./payments/payments.module";
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
    PaymentsModule,
  ],
})
export class AppModule {}
