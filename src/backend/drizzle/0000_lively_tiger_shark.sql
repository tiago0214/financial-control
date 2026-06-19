CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"password" text,
	"created_at" date DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
