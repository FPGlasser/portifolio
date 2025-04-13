-- CreateEnum
CREATE TYPE "TechFields" AS ENUM ('TECHNOLOGY', 'BUSINESS', 'ENTREPRENEURSHIP', 'INNOVATION', 'NEWS', 'EDUCATION', 'RESEARCH', 'FINANCE', 'MARKETING', 'DESIGN', 'SOFTWARE_DEVELOPMENT', 'DATA_SCIENCE', 'CYBERSECURITY', 'CLOUD_COMPUTING', 'DEVOPS', 'AI_ML', 'UX_UI', 'NETWORKING', 'DATABASE_ADMIN', 'GAME_DEVELOPMENT', 'EMBEDDED_SYSTEMS', 'IOT', 'BLOCKCHAIN', 'IT_MANAGEMENT', 'TECH_SUPPORT', 'ANALOG_ELECTRONICS', 'DIGITAL_ELECTRONICS', 'POWER_ELECTRONICS', 'AUTOMATION_CONTROL', 'TELECOMMUNICATIONS', 'ROBOTICS', 'PCB_DESIGN', 'SENSOR_TECHNOLOGY');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('PLANNING', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CANCELED');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "techFields" "TechFields"[];

-- AlterTable
ALTER TABLE "PostContent" ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(5000);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "repositoryUrl" TEXT,
    "ownerId" TEXT NOT NULL,
    "techFields" "TechFields"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "members" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectContent" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(5000) NOT NULL,
    "locale" "LOCALE" NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "ProjectContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTechnology" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,
    "technologyId" INTEGER NOT NULL,

    CONSTRAINT "ProjectTechnology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "website" VARCHAR(512) NOT NULL,
    "icon" TEXT NOT NULL,
    "logoUri" TEXT NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectContent" ADD CONSTRAINT "ProjectContent_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
