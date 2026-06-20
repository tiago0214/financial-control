import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  name: string | undefined;

  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  password: string | undefined;

  @IsNotEmpty()
  @IsEmail()
  email: string | undefined;
}
