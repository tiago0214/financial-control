import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  description: string | undefined;

  @IsNumber()
  @IsNotEmpty()
  amount: number | undefined;

  @IsNotEmpty()
  @IsString()
  date: string | undefined;

  @IsNotEmpty()
  @IsString()
  category: string | undefined;

  @IsNotEmpty()
  @IsString()
  status: string | undefined;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string | undefined;
}
