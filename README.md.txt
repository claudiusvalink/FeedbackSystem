# BNCC Internal Event Feedback System

Proyek ini adalah implementasi sistem CRUD Feedback internal BNCC, terdiri dari form publik dan admin panel sederhana.

Tech Stack

Frontend    : HTML, CSS, dan JavaScript (Barebone)
Backend     : Node.js, Express.js
Data Storage: Array in Memory (Data akan hilang saat server di-restart)

Cara Menjalankan Lokal

Pastikan Anda sudah menginstal Node.js dan npm di sistem Anda.

Instalasi Dependensi

Masuk ke direktori proyek (bnccfeedbacksystem) dan instal paket backend yang dibutuhkan (Express dan CORS):


npm install

npm run dev


3. 🛠️ Update Konfigurasi (package.json)

Pastikan file package.json Anda memiliki script dev seperti ini, karena ini yang akan dipanggil oleh instruksi di atas:

package.json

"scripts": {
    "dev": "node server.js", 
    "test": "echo \"Error: no test specified\" && exit 1"
},