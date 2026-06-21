import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) =>
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    value !== undefined && value !== null ? String(value) : value,
  )
  amount!: string;

  @IsNotEmpty()
  @IsString()
  date!: string;

  @IsNotEmpty()
  @IsString()
  category!: string;

  @IsNotEmpty()
  @IsString()
  status!: string;

  @IsNotEmpty()
  @IsString()
  paymentMethod!: string;
}
