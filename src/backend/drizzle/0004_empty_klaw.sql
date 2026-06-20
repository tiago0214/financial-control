DROP INDEX "transaction_id_user_id";--> statement-breakpoint
CREATE INDEX "unique_transactions" ON "transactions" USING btree ("id");--> statement-breakpoint
CREATE INDEX "user_id_tsx" ON "transactions" USING btree ("user_id");