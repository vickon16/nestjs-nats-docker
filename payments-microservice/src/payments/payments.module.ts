import { Module } from "@nestjs/common";
import { PaymentsMicroservicesController } from "./payments.controller";
import { PaymentsService } from "./payments.service";
import { NatsClientModule } from "src/nats-client/nats-client.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Payment } from "src/entities/Payment";

@Module({
  imports: [TypeOrmModule.forFeature([Payment]), NatsClientModule],
  controllers: [PaymentsMicroservicesController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
