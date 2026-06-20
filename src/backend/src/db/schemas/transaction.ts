import {
  pgTable,
  serial,
  integer,
  text,
  decimal,
  date,
  index,
} from 'drizzle-orm/pg-core';
import { user } from './user';

export const transaction = pgTable(
  'transactions',
  {
    id: serial().primaryKey(),
    userId: integer('user_id').references(() => user.id),
    description: text().notNull(),
    amount: decimal().notNull(),
    date: date().notNull(),
    category: text().notNull(),
    status: text().notNull(),
    paymentMethod: text('payment_method').notNull(),
  },
  (table) => [
    index('unique_transactions').on(table.id),
    index('user_id_tsx').on(table.userId),
  ],
);
