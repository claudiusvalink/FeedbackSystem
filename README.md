=====================================
INSTRUKSI RUN LOKAL ( WAJIB UNTUK DIBACA ) =====================================
=


# BNCC Internal Event Feedback System - Quest RnD

Halo! Ini adalah sistem feedback event internal BNCC yang kami bangun buat tugas Quest Rolling Week. Konsepnya simpel: ada form buat peserta, dan admin panel buat kita (RnD) buat mantau datanya.

Intinya, ini project CRUD (Create, Read, Update, Delete) minim budget—data masih disimpan di memori aja.

---

## Tech Stack & Senjata Utama

* **Frontend (Christian Gerrard):** HTML, CSS, & Barebone JavaScript. Nggak pakai framework ribet, langsung clean code aja.
* **Backend (Claudius Valino):** Node.js + **Express.js (Wajib!)**. Server berjalan di port 3000.
* **Data Storage :** **Array in Memory** di dalam server.js. Disclaimer: Kalau servernya mati, datanya ikut hilang ya.

---

## Cara Menjalankan di Lokal (Gampang Kok!)

Clone gitnya dlu / download Folder FeedbackSystem dari git

Pastikan Node.js dan npm/yarn sudah terinstal di komputer Anda. Buka terminal di folder proyek ini.

### 1. Instalasi Dependensi

Ketik ini:

```bash
npm install
# atau
npm i

npm run dev
