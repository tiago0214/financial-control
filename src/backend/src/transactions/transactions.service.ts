import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { DbService } from 'src/db/db.service';
import { transaction } from 'src/db/schemas';
import { LoggedUser } from 'src/auth/types/types';

@Injectable()
export class TransactionsService {
  constructor(private readonly dbService: DbService) {}

  async create(
    loggedUser: LoggedUser,
    createTransactionDto: CreateTransactionDto,
  ) {
    const { amount, category, date, description, paymentMethod, status } =
      createTransactionDto;

    const db = this.dbService.getSession();
    const insertedTransaction = await db
      .insert(transaction)
      .values({
        userId: Number(loggedUser.sub),
        description,
        amount: String(amount),
        date,
        category,
        status,
        paymentMethod,
      })
      .returning();

    if (insertedTransaction) {
      return {
        message: 'Transaction inserted sucefully!',
        statusCode: 201,
      };
    }

    return {
      message: 'Something went wrong!',
      stastatusCodetus: 500,
    };
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
