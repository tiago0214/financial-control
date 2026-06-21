import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateGoalDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) =>
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    value !== undefined && value !== null ? String(value) : value,
  )
  targetAmount!: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) =>
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    value !== undefined && value !== null ? String(value) : value,
  )
  currentAmount!: string;

  @IsNotEmpty()
  @IsString()
  targetDate!: string;

  @IsNotEmpty()
  @IsString()
  iconString!: string;

  @IsString()
  @IsOptional()
  aiInsight?: string;
}
