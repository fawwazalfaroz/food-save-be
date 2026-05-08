/*
  Warnings:

  - Added the required column `updated_at` to the `Toko` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Toko" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deskripsi" TEXT,
ADD COLUMN     "kontak" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;
