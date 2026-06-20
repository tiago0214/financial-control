import { pgTable, serial, text, timestamp, index } from 'drizzle-orm/pg-core';

export const user = pgTable(
  'users',
  {
    id: serial().primaryKey(),
    name: text(),
    email: text().unique(),
    password: text(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => [index('user_id_index').on(table.id)],
);

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
