/*
  Warnings:

  - You are about to drop the `PostImageUri` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `publishedDate` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PostImageUri" DROP CONSTRAINT "PostImageUri_postContentId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "articleUrl" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "publishedDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "ProjectStatus" NOT NULL;

-- DropTable
DROP TABLE "PostImageUri";
