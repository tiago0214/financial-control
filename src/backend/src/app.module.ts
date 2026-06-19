import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { GoalsModule } from './goals/goals.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TransactionsModule, GoalsModule, DbModule, AuthModule],
})
export class AppModule {}
