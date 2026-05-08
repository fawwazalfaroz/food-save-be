-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PEMBELI', 'PENYEDIA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "no_telepon" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Toko" (
    "id" TEXT NOT NULL,
    "penyedia_id" TEXT NOT NULL,
    "nama_toko" TEXT NOT NULL,
    "alamat_toko" TEXT NOT NULL,
    "jam_operasional" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "rating_rata_rata" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Toko_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produk" (
    "id" TEXT NOT NULL,
    "toko_id" TEXT NOT NULL,
    "nama_makanan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga_asli" INTEGER NOT NULL,
    "harga_diskon" INTEGER NOT NULL,
    "stok" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,
    "waktu_pickup" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Toko_penyedia_id_key" ON "Toko"("penyedia_id");

-- AddForeignKey
ALTER TABLE "Toko" ADD CONSTRAINT "Toko_penyedia_id_fkey" FOREIGN KEY ("penyedia_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produk" ADD CONSTRAINT "Produk_toko_id_fkey" FOREIGN KEY ("toko_id") REFERENCES "Toko"("id") ON DELETE CASCADE ON UPDATE CASCADE;
