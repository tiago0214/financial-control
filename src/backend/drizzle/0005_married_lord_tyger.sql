CREATE TABLE "goals" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"title" text NOT NULL,
	"target_amount" numeric NOT NULL,
	"current_amount" numeric NOT NULL,
	"target_date" date NOT NULL,
	"icon_string" text NOT NULL,
	"ai_insigth" text
);
--> statement-breakpoint
ALTER TABLE "goals" ADD CONSTRAINT "goals_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "single_goal" ON "goals" USING btree ("id");--> statement-breakpoint
CREATE INDEX "user_id_goal" ON "goals" USING btree ("user_id");