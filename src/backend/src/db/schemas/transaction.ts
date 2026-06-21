import {
  pgTable,
  serial,
  integer,
  text,
  decimal,
  date,
  index,
  timestamp,
} from 'drizzle-orm/pg-core';
import { user } from './user';

export const transaction = pgTable(
  'transactions',
  {
    id: serial().primaryKey(),
    userId: integer('user_id').references(() => user.id, {
      onDelete: 'cascade',
    }),
    description: text(),
    amount: decimal(),
    date: date(),
    category: text(),
    status: text(),
    paymentMethod: text('payment_method'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
  },
  (table) => [
    index('unique_transactions').on(table.id),
    index('user_id_tsx').on(table.userId),
  ],
);

export type InsertTransaction = typeof transaction.$inferInsert;
export type SelectTransaction = typeof transaction.$inferSelect;
