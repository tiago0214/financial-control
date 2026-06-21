import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  password!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;
}
