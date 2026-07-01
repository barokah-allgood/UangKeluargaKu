# Product Requirements Document (PRD): Aplikasi Keuangan Keluarga

## 1. Ringkasan Eksekutif
Aplikasi keuangan keluarga ini dirancang untuk memberikan transparansi dan kontrol finansial secara *real-time* bagi seluruh anggota keluarga. Dibangun dengan fokus utama pada efisiensi, aplikasi ini jauh lebih praktis dan cepat dibandingkan pencatatan manual atau Excel. Tujuan utamanya adalah memungkinkan suami dan istri memantau anggaran harian dan mingguan secara kolaboratif agar pengeluaran tidak "bocor", sekaligus memberikan ruang edukasi finansial dasar bagi anak melalui akun pribadinya.

## 2. Pengguna Sasaran & Skenario Utama
* **Target Pengguna Utama:** Suami dan Istri secara bersamaan (kolaboratif), disusul oleh Anak (mandiri/terbatas).
* **Aksi Layar Utama (First Action):** Saat aplikasi pertama kali dibuka, layar utama harus langsung menampilkan antarmuka/tombol cepat untuk **Mencatat Pengeluaran** (*quick add expense*), karena ini adalah aktivitas yang paling sering dilakukan.
* **Retensi Pengguna:** Pengguna akan kembali menggunakan aplikasi setiap hari untuk memastikan pengeluaran harian tetap berada dalam batas *budget* yang telah ditentukan.

## 3. Manajemen Akses & Peran (Role-Based Access Control)
Aplikasi ini memiliki sistem multi-akun dalam satu grup keluarga. Hak akses data diatur secara ketat sesuai peran anggota keluarga.

| Peran Pengguna | Akses Pemasukan/Pengeluaran Sendiri | Akses Data Pasangan | Akses Data Anak |
| :--- | :--- | :--- | :--- |
| **Suami** | Baca, Tulis, Edit, Hapus | Baca (View Only) | Baca (View Only) |
| **Istri** | Baca, Tulis, Edit, Hapus | Baca (View Only) | Baca (View Only) |
| **Anak** | Baca, Tulis, Edit, Hapus | Tidak Ada Akses | Tidak Relevan |

## 4. Fitur Utama (Core Features)
* **Pencatatan Finansial Praktis:** Formulir entri cepat untuk mencatat pemasukan dan pengeluaran harian.
* **Budgeting & Limit Pengeluaran:** Fitur penentuan batas anggaran bulanan atau mingguan per kategori, dilengkapi peringatan dini jika pengeluaran mendekati limit.
* **Monitoring Real-time Antar Akun:** Sinkronisasi basis data instan berbasis *cloud* sehingga transaksi yang diinput oleh satu akun langsung tercermin di dasbor akun keluarga lainnya sesuai hak akses.
* **Laporan & Grafik Keuangan:** Visualisasi data pengeluaran dan pemasukan (misalnya menggunakan *pie chart* atau *bar chart*) untuk mempermudah analisis kesehatan keuangan keluarga.
* **Manajemen Kategori Fleksibel:** Pengguna dapat mengedit, menambah, atau menyembunyikan kategori dan sub-kategori sesuai kebutuhan spesifik keluarga.

## 5. Struktur Kategori Default
Struktur kategori ini dapat diedit (*editable*) oleh pengguna utama (Suami/Istri).

### Daftar Pemasukan Utama
1. Gaji
2. Bunga
3. Pemasukan lainnya
4. Bonus
5. Penjualan

### Daftar Pengeluaran & Sub-kategori
1. **Asuransi**
2. **Belanja**: Rumah Tangga, Sayuran, Elektronik
3. **Bisnis**
4. **Hadiah dan Donasi**: Amal, Pemakaman, Pernikahan
5. **Hiburan**
6. **Investasi**
7. **Keluarga**: Anak, Hewan peliharaan, Layanan rumah, Perbaikan rumah
8. **Kesehatan dan Kebugaran**: Dokter, Obat, Olahraga, Perawatan pribadi
9. **Makanan dan Minuman**: Jajan, Kafe, Restoran
10. **Tarik tunai**
11. **Pendidikan**: Buku, Les
12. **Pengeluaran lainnya**
13. **Tagihan dan utilitas**: Sewa, Air, Gas, Internet, IPL, Listrik, Rumah, Telepon
14. **Teman dan kekasih**
15. **Transportasi**: Bensin, Parkir, Pemeliharaan, Taksi
