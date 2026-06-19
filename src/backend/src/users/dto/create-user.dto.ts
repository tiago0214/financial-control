import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string | undefined;

  @IsNotEmpty()
  @IsNotEmpty()
  password: string | undefined;
}
