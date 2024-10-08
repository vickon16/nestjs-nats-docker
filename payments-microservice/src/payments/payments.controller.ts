import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { NATS_CLIENT } from "src/constants";
import { CreatePaymentDto } from "./payments.dto";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsMicroservicesController {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly natsClient: ClientProxy,
    private readonly paymentService: PaymentsService,
  ) {}

  @EventPattern("createPayment")
  async createPayments(@Payload() dto: CreatePaymentDto) {
    const response = await this.paymentService.createPayment(dto);
    this.natsClient.emit("paymentsCreated", response);
  }
}
