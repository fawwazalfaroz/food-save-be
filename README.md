# Food Waste Management System - Backend API 🥐

Sistem backend berbasis **NestJS** untuk menghubungkan penyedia makanan (toko/restoran) dengan pembeli guna mengurangi limbah makanan melalui sistem reservasi sisa display.

## Tech Stack
- **Framework:** NestJS
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** JWT (JSON Web Token) & Bcrypt
- **Language:** TypeScript

## Fitur Utama
- **Autentikasi:** Register & Login dengan enkripsi password.
- **Manajemen Toko:** Setiap penyedia (Provider) bisa mendaftarkan profil toko unik.
- **Manajemen Produk:** Fitur CRUD untuk makanan sisa yang layak konsumsi.
- **Keamanan:** Proteksi rute menggunakan JWT Guard dan Custom Decorator.
- **Integrasi Database:** Relasi database yang solid antara User, Toko, dan Produk.

## Struktur Database (ERD)
Sistem ini menggunakan relasi:
- **User (1) <-> (1) Toko**
- **Toko (1) <-> (N) Produk**


## 📍 API Endpoints Utama

Tabel ini berisi daftar rute API yang tersedia di dalam sistem.

| HTTP Method | Endpoint | Deskripsi | Butuh Token (Auth)? |
| :--- | :--- | :--- | :--- |
| **POST** | `/auth/register` | Mendaftarkan akun baru (Penyedia/Pembeli) | Tidak ❌ |
| **POST** | `/auth/login` | Login untuk mendapatkan tiket/token JWT | Tidak ❌ |
| **POST** | `/toko` | Menyimpan data profil toko milik penyedia | Ya ✅ |
| **POST** | `/produk` | Memajang produk makanan sisa display | Ya ✅ |
| **GET** | `/produk` | Menampilkan seluruh daftar makanan | Tidak ❌ |

## 🏁 Cara Menjalankan Project Secara Lokal
1. **Clone repository:**
   ```bash
   git clone [https://github.com/username/repo-name.git](https://github.com/username/repo-name.git)
   cd backend