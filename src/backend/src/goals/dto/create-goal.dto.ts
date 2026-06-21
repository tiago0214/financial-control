import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGoalDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsNumber()
  @IsNotEmpty()
  targetAmount!: number;

  @IsNotEmpty()
  @IsNumber()
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
