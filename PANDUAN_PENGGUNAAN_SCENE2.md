# 📖 PANDUAN PENGGUNAAN SCENE 2 - EKSPERIMEN VIRTUAL LAB

## 🎯 OVERVIEW
Scene 2 adalah eksperimen virtual laboratorium untuk mempelajari efek deodoran terhadap pertumbuhan bakteri. Panduan ini menjelaskan cara menggunakan semua fitur dan aksi yang tersedia.

---

## 🚀 CARA MEMULAI

### 1. **Buka Scene 2**
- Buka file `public/scene2.html` di browser
- Tunggu semua asset 3D selesai dimuat (terlihat di layar)

### 2. **Mulai Eksperimen**
- Klik tombol **"MULAI EKSPERIMEN"** di papan instruksi
- Eksperimen akan dimulai dan instruksi pertama akan muncul

---

## 🔬 LANGKAH-LANGKAH EKSPERIMEN

### **Langkah 1: Ambil Sampel (Take Sample)**
**Cara:**
1. Arahkan pointer (lingkaran putih di tengah layar) ke **Cotton Swab** (toples kapas di kiri meja)
2. Klik atau tekan tombol interaksi
3. Sampel akan diambil dengan efek visual dan suara

**Indikator:**
- ✅ Progress tracker akan menandai langkah 1 selesai
- 💬 Pesan konfirmasi akan muncul
- 🔊 Suara "pickup" akan terdengar
- ✨ Efek partikel akan muncul di sekitar cotton swab

---

### **Langkah 2: Oleskan Sampel (Apply Sample)**
**Cara:**
1. Arahkan pointer ke **Petri Dish** (cawan petri di tengah meja)
2. Klik atau tekan tombol interaksi
3. Sampel akan dioleskan ke cawan petri

**Catatan:**
- ⚠️ Pastikan sudah mengambil sampel terlebih dahulu
- Jika belum mengambil sampel, akan muncul pesan error

**Indikator:**
- ✅ Progress tracker akan menandai langkah 2 selesai
- 💬 Pesan konfirmasi akan muncul
- 🔊 Suara "drop" akan terdengar
- ✨ Animasi rotasi pada cawan petri

---

### **Langkah 3: Tambahkan Deodoran (Add Deodorant)**
**Cara:**
1. Arahkan pointer ke **Deodorant** (deodoran di kanan meja)
2. Klik atau tekan tombol interaksi
3. Deodoran akan ditambahkan ke cawan petri

**Catatan:**
- ⚠️ Pastikan sudah mengoleskan sampel terlebih dahulu
- Jika belum mengoleskan sampel, akan muncul pesan error

**Indikator:**
- ✅ Progress tracker akan menandai langkah 3 selesai
- 💬 Pesan konfirmasi akan muncul
- 🔊 Suara "drop" akan terdengar
- ✨ Animasi pergerakan deodoran

---

### **Langkah 4: Nyalakan Bunsen Burner (Toggle Bunsen)**
**Cara:**
1. Arahkan pointer ke **Bunsen Burner** (pembakar bunsen di meja)
2. Klik atau tekan tombol interaksi
3. Bunsen burner akan menyala dengan efek api

**Catatan:**
- 🔥 Bunsen burner bisa dinyalakan/matikan kapan saja
- Klik sekali untuk menyalakan, klik lagi untuk mematikan
- Tidak perlu menunggu langkah sebelumnya selesai

**Indikator:**
- 🔥 Api akan muncul di atas bunsen burner
- 💡 Pencahayaan akan berubah (point light)
- 🔊 Suara "flame" akan terdengar
- ✨ Animasi flicker pada api

---

### **Langkah 5: Ukur Suhu (Measure Temperature)**
**Cara:**
1. Arahkan pointer ke **Thermometer** (termometer di meja)
2. Klik atau tekan tombol interaksi
3. Tunggu 2-3 detik untuk pengukuran selesai
4. Suhu akan muncul di layar

**Catatan:**
- ⏱️ Pengukuran membutuhkan waktu 2-3 detik
- ⚠️ Thermometer akan "shake" selama pengukuran
- 📊 Suhu yang dihasilkan random antara 35-40°C

**Indikator:**
- 💬 Pesan "Mengukur suhu... Tunggu sebentar..."
- 📊 Display suhu muncul di atas thermometer
- 🔊 Suara "measurement" akan terdengar
- ✨ Efek glow pada thermometer

---

### **Langkah 6: Lihat Hasil Observasi**
**Cara:**
- Setelah semua langkah selesai, hasil observasi akan muncul otomatis
- Atau klik pada area observasi jika sudah tersedia

**Fitur yang Tersedia:**
- 📊 **EXPORT DATA**: Export data eksperimen ke file JSON
- 📈 **VIEW CHART**: Lihat grafik suhu dan pertumbuhan bakteri

---

### **Langkah 7: Jawab Kuis Final**
**Cara:**
- Setelah hasil observasi muncul, kuis final akan muncul otomatis
- Jawab semua pertanyaan (4 pilihan ganda + 1 essay)
- Klik **"Submit"** untuk melihat hasil

**Fitur Kuis:**
- ✅ Progress tracking per pertanyaan
- 📊 Skor otomatis
- 💬 Feedback untuk setiap jawaban
- 🎯 Achievement check untuk skor sempurna

---

## 🎮 KONTROL & NAVIGASI

### **Desktop/Mouse:**
- **Mouse Movement**: Gerakkan mouse untuk melihat sekeliling
- **Click**: Klik untuk berinteraksi dengan objek
- **WASD Keys**: Gerakkan karakter (jika enabled)
- **V Key**: Toggle FPP/TPP camera mode

### **Touch/Mobile:**
- **Touch & Drag**: Geser untuk melihat sekeliling
- **Tap**: Ketuk untuk berinteraksi
- **Joystick**: Gunakan joystick virtual untuk bergerak

### **VR (jika tersedia):**
- **Head Movement**: Putar kepala untuk melihat
- **Controller**: Gunakan controller untuk interaksi
- **Teleport**: Gunakan teleport untuk bergerak

---

## 🛠️ FITUR TAMBAHAN

### **1. Save Progress (SAVE)**
**Cara:**
- Klik tombol **"SAVE"** di papan instruksi
- Progress akan disimpan ke localStorage browser

**Fitur:**
- 💾 Menyimpan semua state eksperimen
- ✅ Menyimpan progress tracker
- 📊 Menyimpan data eksperimen
- 🔄 Auto-save (jika diaktifkan di Settings)

---

### **2. Load Progress (LOAD)**
**Cara:**
- Klik tombol **"LOAD"** di papan instruksi
- Konfirmasi dialog akan muncul
- Klik **"Ya"** untuk memuat progress

**Fitur:**
- 📂 Memuat semua state eksperimen
- ✅ Memulihkan progress tracker
- 📊 Memulihkan data eksperimen
- 🔄 Memulihkan visual state

---

### **3. Reset Experiment (RESET)**
**Cara:**
- Klik tombol **"RESET"** di papan instruksi
- Eksperimen akan direset ke kondisi awal

**Fitur:**
- 🔄 Reset semua state
- ✅ Reset progress tracker
- 📊 Clear data eksperimen
- 🎯 Reset visual state

---

### **4. Achievements (🏆)**
**Cara:**
- Klik tombol **"🏆"** di papan instruksi
- Popup achievements akan muncul

**Achievements yang Tersedia:**
1. 🎯 **First Step** - Ambil sampel pertama kali
2. 🔬 **Lab Master** - Selesaikan semua langkah
3. ⚡ **Speed Demon** - Selesaikan eksperimen dengan cepat
4. 📊 **Data Analyst** - Export data eksperimen
5. 🎓 **Quiz Master** - Dapatkan skor sempurna di kuis
6. 🔥 **Fire Starter** - Nyalakan bunsen burner
7. 🌡️ **Temperature Pro** - Ukur suhu dengan benar
8. 🏆 **Perfect Run** - Selesaikan semua dengan sempurna

---

### **5. Statistics Dashboard (📊)**
**Cara:**
- Klik tombol **"📊"** di papan instruksi
- Dashboard statistik akan muncul

**Statistik yang Ditampilkan:**
- 📈 Total Eksperimen
- ✅ Completed Eksperimen
- ⏱️ Rata-rata Waktu
- ⚡ Waktu Terbaik
- 📊 Quiz Performance
- 🏆 Achievements Progress
- 📉 Completion Rate

---

### **6. Settings Panel (⚙️)**
**Cara:**
- Klik tombol **"⚙️"** di papan instruksi
- Panel settings akan muncul

**Settings yang Tersedia:**
- 🔊 **Sound Effects**: Aktifkan/matikan efek suara
- 🏷️ **Show Labels**: Tampilkan/sembunyikan label equipment
- 💾 **Auto Save**: Otomatis simpan progress
- ⚡ **Animation Speed**: Atur kecepatan animasi (0.5x - 2x)
- 📏 **UI Scale**: Atur ukuran UI (0.8x - 1.2x)

---

### **7. Help/Tutorial (BANTUAN)**
**Cara:**
- Klik tombol **"BANTUAN"** di papan instruksi
- Popup help akan muncul

**Konten Help:**
- 🎮 Kontrol & Navigasi
- 🔬 Langkah-langkah Eksperimen
- 💡 Tips & Trik
- ❓ Troubleshooting

---

## 📊 DATA VISUALIZATION

### **Export Data (EXPORT DATA)**
**Cara:**
- Setelah hasil observasi muncul, klik tombol **"EXPORT DATA"**
- File JSON akan diunduh ke komputer

**Data yang Diexport:**
- 📅 Timestamp eksperimen
- 🌡️ Suhu yang terukur
- ⏱️ Waktu observasi
- 📝 Kesimpulan eksperimen
- 📊 Progress state

---

### **View Chart (VIEW CHART)**
**Cara:**
- Setelah hasil observasi muncul, klik tombol **"VIEW CHART"**
- Popup chart akan muncul

**Chart yang Tersedia:**
- 📈 **Temperature Chart**: Grafik suhu vs waktu
- 📊 **Growth Chart**: Grafik pertumbuhan bakteri sebelum/sesudah treatment

---

## 🎯 TIPS & TRIK

### **Tips Umum:**
1. ✅ Ikuti urutan langkah dengan benar
2. 👀 Perhatikan pesan yang muncul
3. 🔊 Aktifkan sound untuk feedback yang lebih baik
4. 💾 Gunakan Save/Load untuk melanjutkan nanti
5. 📊 Cek Statistics untuk melihat progress

### **Tips Eksperimen:**
1. 🔬 Ambil sampel terlebih dahulu sebelum langkah lain
2. ⏱️ Tunggu pengukuran suhu selesai (2-3 detik)
3. 🔥 Bunsen burner bisa dinyalakan kapan saja
4. 📊 Lihat chart untuk analisis lebih detail
5. 🎓 Jawab kuis dengan teliti untuk skor tinggi

### **Tips Performance:**
1. ⚡ Gunakan Animation Speed 1.0x untuk performa optimal
2. 🎨 Matikan efek visual jika lag
3. 🔊 Matikan sound jika tidak diperlukan
4. 💾 Gunakan Auto Save untuk kenyamanan

---

## ❓ TROUBLESHOOTING

### **Masalah: Asset tidak terlihat**
**Solusi:**
- Tunggu beberapa detik untuk loading
- Refresh halaman
- Cek console browser untuk error

### **Masalah: Tidak bisa klik objek**
**Solusi:**
- Pastikan pointer (lingkaran putih) mengarah ke objek
- Cek apakah objek sudah visible
- Coba refresh halaman

### **Masalah: Progress tidak tersimpan**
**Solusi:**
- Pastikan localStorage browser enabled
- Cek Settings > Auto Save aktif
- Coba save manual via tombol SAVE

### **Masalah: Suara tidak terdengar**
**Solusi:**
- Cek Settings > Sound Effects aktif
- Cek volume browser/komputer
- Cek apakah browser support Web Audio API

### **Masalah: Chart tidak muncul**
**Solusi:**
- Pastikan sudah menyelesaikan semua langkah
- Cek apakah hasil observasi sudah muncul
- Refresh halaman dan coba lagi

---

## 🎓 PANDUAN LENGKAP URUTAN EKSPERIMEN

### **Urutan yang Benar:**
1. ✅ Klik **"MULAI EKSPERIMEN"**
2. ✅ Klik **Cotton Swab** (Ambil Sampel)
3. ✅ Klik **Petri Dish** (Oleskan Sampel)
4. ✅ Klik **Deodorant** (Tambahkan Deodoran)
5. ✅ Klik **Bunsen Burner** (Nyalakan - Opsional)
6. ✅ Klik **Thermometer** (Ukur Suhu - Tunggu 2-3 detik)
7. ✅ Lihat **Hasil Observasi** (Otomatis muncul)
8. ✅ Klik **"VIEW CHART"** (Opsional - Lihat Grafik)
9. ✅ Klik **"EXPORT DATA"** (Opsional - Export Data)
10. ✅ Jawab **Kuis Final** (4 pilihan ganda + 1 essay)
11. ✅ Lihat **Hasil Kuis** (Skor & Feedback)

---

## 🔄 AUTO-SAVE

### **Cara Kerja:**
- Auto-save aktif secara default
- Progress otomatis disimpan setelah setiap action:
  - ✅ Setelah mengambil sampel
  - ✅ Setelah mengoleskan sampel
  - ✅ Setelah menambahkan deodoran
  - ✅ Setelah mengukur suhu

### **Mengaktifkan/Nonaktifkan:**
- Buka **Settings Panel** (⚙️)
- Toggle **Auto Save** on/off
- Settings akan tersimpan otomatis

---

## 🎉 SELAMAT MENCOBA!

Semua fitur sudah siap digunakan. Ikuti panduan di atas untuk pengalaman terbaik. Jika ada pertanyaan atau masalah, cek bagian Troubleshooting atau buka Help Panel.

**Happy Experimenting! 🔬✨**

