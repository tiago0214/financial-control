import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOne(email);

    if (user?.password) {
      const pass = await compare(password, user.password);

      if (pass) return true;
    }

    return false;
  }
}
