import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { NATS_CLIENT } from "src/constants";
import { CreatePaymentsDto } from "./payments.dto";

@Controller("payments")
export class PaymentsController {
  constructor(@Inject(NATS_CLIENT) private natsClient: ClientProxy) {}

  @Post()
  createPayments(@Body() dto: CreatePaymentsDto) {
    return this.natsClient.emit("createPayment", dto);
  }
}
