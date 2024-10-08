import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePaymentsDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
