import { PartialType } from "@nestjs/mapped-types";

export class CreateUserDto {
  username: string;
  displayName?: string;
  email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
