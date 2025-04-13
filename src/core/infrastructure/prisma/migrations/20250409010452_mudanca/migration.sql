/*
  Warnings:

  - The values [DATABASE_ADMIN] on the enum `TechFields` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `projectType` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProjectTypeEnum" AS ENUM ('FRONTEND', 'BACKEND', 'FULLSTACK', 'DATABASE', 'ARCHITECTURE', 'DDD', 'MICROSERVICES');

-- AlterEnum
BEGIN;
CREATE TYPE "TechFields_new" AS ENUM ('TECHNOLOGY', 'BUSINESS', 'ENTREPRENEURSHIP', 'INNOVATION', 'NEWS', 'EDUCATION', 'RESEARCH', 'FINANCE', 'MARKETING', 'DESIGN', 'SOFTWARE_DEVELOPMENT', 'DATA_SCIENCE', 'CYBERSECURITY', 'CLOUD_COMPUTING', 'DEVOPS', 'AI_ML', 'UX_UI', 'NETWORKING', 'DATABASE', 'GAME_DEVELOPMENT', 'EMBEDDED_SYSTEMS', 'IOT', 'BLOCKCHAIN', 'IT_MANAGEMENT', 'TECH_SUPPORT', 'ANALOG_ELECTRONICS', 'DIGITAL_ELECTRONICS', 'POWER_ELECTRONICS', 'AUTOMATION_CONTROL', 'TELECOMMUNICATIONS', 'ROBOTICS', 'PCB_DESIGN', 'SENSOR_TECHNOLOGY');
ALTER TABLE "Post" ALTER COLUMN "techFields" TYPE "TechFields_new"[] USING ("techFields"::text::"TechFields_new"[]);
ALTER TABLE "Project" ALTER COLUMN "techFields" TYPE "TechFields_new"[] USING ("techFields"::text::"TechFields_new"[]);
ALTER TABLE "Newsletter" ALTER COLUMN "topic" TYPE "TechFields_new" USING ("topic"::text::"TechFields_new");
ALTER TABLE "Subscriber" ALTER COLUMN "topics" TYPE "TechFields_new"[] USING ("topics"::text::"TechFields_new"[]);
ALTER TYPE "TechFields" RENAME TO "TechFields_old";
ALTER TYPE "TechFields_new" RENAME TO "TechFields";
DROP TYPE "TechFields_old";
COMMIT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectType" "ProjectTypeEnum" NOT NULL;
