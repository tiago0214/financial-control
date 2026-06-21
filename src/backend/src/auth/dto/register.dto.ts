import { LoginDto } from './login.dto';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto extends LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name!: string;
}
