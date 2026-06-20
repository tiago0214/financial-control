import {
  pgTable,
  serial,
  integer,
  text,
  date,
  decimal,
  index,
  timestamp,
} from 'drizzle-orm/pg-core';
import { user } from './user';

export const goal = pgTable(
  'goals',
  {
    id: serial().primaryKey(),
    userId: integer('user_id').references(() => user.id, {
      onDelete: 'cascade',
    }),
    title: text().notNull(),
    targetAmount: decimal('target_amount').notNull(),
    currentAmount: decimal('current_amount').notNull(),
    targetDate: date('target_date').notNull(),
    iconString: text('icon_string').notNull(),
    aiInsight: text('ai_insigth'),
    createAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    index('single_goal').on(table.id),
    index('user_id_goal').on(table.userId),
  ],
);

export type InsertGoal = typeof goal.$inferInsert;
export type SelectGoal = typeof goal.$inferSelect;
