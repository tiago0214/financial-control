ALTER TABLE "goals" RENAME COLUMN "createAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "goals" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "transactions" RENAME COLUMN "time_stamp" TO "created_at";