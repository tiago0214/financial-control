import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { GetLoggedUser } from 'src/auth/decorators/logged-user.decorator';
import type { LoggedUser } from 'src/auth/types/types';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('goals')
@UseGuards(AuthGuard)
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  create(
    @GetLoggedUser() user: LoggedUser,
    @Body() createGoalDto: CreateGoalDto,
  ) {
    return this.goalsService.create(user, createGoalDto);
  }

  @Get()
  findAll(@GetLoggedUser() user: LoggedUser) {
    return this.goalsService.findAll(user);
  }

  @Get(':id')
  findOne(@GetLoggedUser() user: LoggedUser, @Param('id') id: number) {
    return this.goalsService.findOne(user, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoalDto: UpdateGoalDto) {
    return this.goalsService.update(+id, updateGoalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goalsService.remove(+id);
  }
}
