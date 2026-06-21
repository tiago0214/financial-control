ALTER TABLE "goals" ALTER COLUMN "title" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "target_amount" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "current_amount" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "target_date" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "icon_string" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "updated_at" DROP NOT NULL;