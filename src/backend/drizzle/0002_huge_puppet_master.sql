CREATE TABLE "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"description" text NOT NULL,
	"amount" numeric NOT NULL,
	"date" date NOT NULL,
	"category" text NOT NULL,
	"status" text NOT NULL,
	"payment_method" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;