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
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetLoggedUser } from 'src/auth/decorators/logged-user.decorator';
import type { LoggedUser } from 'src/auth/types/types';

@Controller('transactions')
@UseGuards(AuthGuard)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(
    @GetLoggedUser() user: LoggedUser,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.create(user, createTransactionDto);
  }

  @Get()
  findAll(@GetLoggedUser() user: LoggedUser) {
    return this.transactionsService.findAll(user);
  }

  @Get(':id')
  findOne(@GetLoggedUser() user: LoggedUser, @Param('id') id: number) {
    return this.transactionsService.findOne(user, id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
