import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { GetLoggedUser } from './decorators/logged-user.decorator';
import type { LoggedUser } from './types/types';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() signInDto: LoginDto) {
    return this.authService.login(signInDto.email, signInDto.password);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getUserProfile(@GetLoggedUser() user: LoggedUser) {
    return {
      id: user.sub,
      name: user.name,
      email: user.email,
    };
  }
}
