import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { NATS_CLIENT } from "src/constants";
import { CreateUserDto } from "./user.dto";

@Controller("users")
export class UserController {
  constructor(
    @Inject(NATS_CLIENT)
    private natsClient: ClientProxy,
  ) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.natsClient.send({ cmd: "createUser" }, dto);
  }
}
