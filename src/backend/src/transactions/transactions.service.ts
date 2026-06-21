import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { DbService } from 'src/db/db.service';
import { transaction } from 'src/db/schemas';
import { LoggedUser } from 'src/auth/types/types';
import { eq, and } from 'drizzle-orm';

@Injectable()
export class TransactionsService {
  constructor(private readonly dbService: DbService) {}

  async create(
    loggedUser: LoggedUser,
    createTransactionDto: CreateTransactionDto,
  ) {
    const userId = loggedUser.sub;
    const { amount, category, date, description, paymentMethod, status } =
      createTransactionDto;

    const db = this.dbService.getSession();
    const insertedTransaction = await db
      .insert(transaction)
      .values({
        userId,
        description,
        amount,
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

  async findAll(loggedUser: LoggedUser) {
    const db = this.dbService.getSession();
    const userId = loggedUser.sub;

    const transacations = await db
      .select()
      .from(transaction)
      .where(eq(transaction.userId, userId));

    if (transacations.length > 0) {
      return {
        transactions: transacations,
      };
    }

    return {
      transactions: [],
    };
  }

  async findOne(loggedUser: LoggedUser, id: number) {
    const userId = loggedUser.sub;

    const db = this.dbService.getSession();
    const foundTransaction = await db
      .select()
      .from(transaction)
      .where(and(eq(transaction.id, id), eq(transaction.userId, userId)));

    if (foundTransaction.length > 0) {
      return {
        transactions: foundTransaction[0],
      };
    }

    return {
      transactions: {},
    };
  }

  async update(
    loggedUser: LoggedUser,
    id: number,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const userId = loggedUser.sub;
    const db = this.dbService.getSession();
    const { amount, category, date, description, paymentMethod, status } =
      updateTransactionDto;

    const checkItens = Object.keys(updateTransactionDto);

    if (checkItens.length == 0) throw new BadRequestException();

    await db
      .update(transaction)
      .set({
        amount,
        category,
        date,
        description,
        paymentMethod,
        status,
      })
      .where(and(eq(transaction.id, id), eq(transaction.userId, userId)));

    return {
      message: `Transaction updated sucefully!`,
    };
  }

  async remove(loggedUser: LoggedUser, id: number) {
    const userId = loggedUser.sub;
    const db = this.dbService.getSession();

    await db
      .delete(transaction)
      .where(and(eq(transaction.id, userId), eq(transaction.id, id)));

    return {
      message: 'Transaction delete sucefully!',
    };
  }
}
