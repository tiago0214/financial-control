import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  password: string | undefined;

  @IsNotEmpty()
  @IsEmail()
  email: string | undefined;
}
