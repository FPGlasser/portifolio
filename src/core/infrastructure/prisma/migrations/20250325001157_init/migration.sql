-- CreateEnum
CREATE TYPE "LOCALE" AS ENUM ('en', 'pt', 'fr', 'es');

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceContent" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(128) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "locale" "LOCALE" NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "ServiceContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostContent" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(128) NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "Locale" "LOCALE" NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "PostContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostImageUri" (
    "id" SERIAL NOT NULL,
    "imageUri" VARCHAR NOT NULL,
    "postContentId" INTEGER NOT NULL,

    CONSTRAINT "PostImageUri_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceContent" ADD CONSTRAINT "ServiceContent_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostContent" ADD CONSTRAINT "PostContent_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostImageUri" ADD CONSTRAINT "PostImageUri_postContentId_fkey" FOREIGN KEY ("postContentId") REFERENCES "PostContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
