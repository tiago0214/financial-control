import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const result = await this.validateUser(email, password);

    if (result) {
      const payload = {
        sub: result.id,
        email: result.email,
        name: result.name,
      };

      return {
        access_token: await this.jwtService.signAsync(payload),
        user_info: {
          id: result.id,
          email: result.email,
          name: result.name,
        },
      };
    }

    throw new UnauthorizedException();
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    if (user && user?.password) {
      const pass = await compare(password, user.password);
      if (pass) {
        //eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async register(registerData: RegisterDto) {
    const { email, password } = registerData;
    const result = await this.usersService.create(registerData);

    if (result) {
      await this.login(email, password);
    }
  }
}
