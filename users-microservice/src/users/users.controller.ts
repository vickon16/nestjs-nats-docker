import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./users.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersMicroserviceController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: "createUser" })
  async createUser(@Payload() dto: CreateUserDto) {
    return await this.usersService.createUser(dto);
  }

  @MessagePattern({ cmd: "getUserById" })
  async getUserById(@Payload() dto: string) {
    return await this.usersService.getUserById(dto);
  }

  @EventPattern("paymentsCreated")
  paymentCreated(@Payload() dto: CreateUserDto) {
    console.log("payment-created", dto);
  }
}
