import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./users.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const newUser = this.userRepo.create(dto);
    return await this.userRepo.save(newUser);
  }

  async getUserById(id: string) {
    return await this.userRepo.findOne({
      where: { id },
    });
  }
}
