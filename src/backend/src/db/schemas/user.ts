import { pgTable, serial, text, date, index } from 'drizzle-orm/pg-core';

export const user = pgTable(
  'users',
  {
    id: serial().primaryKey(),
    name: text(),
    email: text().unique(),
    password: text(),
    created_at: date().defaultNow(),
  },
  (table) => [index('user_id_index').on(table.id)],
);
