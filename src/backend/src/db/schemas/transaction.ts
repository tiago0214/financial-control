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
    description: text().notNull(),
    amount: decimal().notNull(),
    date: date().notNull(),
    category: text().notNull(),
    status: text().notNull(),
    paymentMethod: text('payment_method').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    index('unique_transactions').on(table.id),
    index('user_id_tsx').on(table.userId),
  ],
);

export type InsertTransaction = typeof transaction.$inferInsert;
export type SelectTransaction = typeof transaction.$inferSelect;
