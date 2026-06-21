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
    title: text(),
    targetAmount: decimal('target_amount'),
    currentAmount: decimal('current_amount'),
    targetDate: date('target_date'),
    iconString: text('icon_string'),
    aiInsight: text('ai_insigth'),
    createAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
  },
  (table) => [
    index('single_goal').on(table.id),
    index('user_id_goal').on(table.userId),
  ],
);

export type InsertGoal = typeof goal.$inferInsert;
export type SelectGoal = typeof goal.$inferSelect;
