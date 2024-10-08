import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "src/entities/Payment";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./payments.dto";
import { NATS_CLIENT } from "src/constants";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepo: Repository<Payment>,
    @Inject(NATS_CLIENT)
    private readonly natsClient: ClientProxy,
  ) {}

  async createPayment(dto: CreatePaymentDto) {
    const user = await lastValueFrom<any>(
      this.natsClient.send({ cmd: "getUserById" }, dto.userId),
    );

    console.log({ user });
    const newPayment = this.paymentRepo.create(dto);
    const savedPayment = await this.paymentRepo.save(newPayment);
    return { user, savedPayment };
  }
}
