# PLANNING VIDEO YOUTUBE UNTUK SCENE2.HTML

## 📹 OPSI MENAMPILKAN VIDEO YOUTUBE

Ada **2 opsi utama** untuk menampilkan video YouTube di A-Frame:

---

## ✅ OPSI 1: DOWNLOAD VIDEO (DIREKOMENDASIKAN)

### Keuntungan:
- ✅ **Lebih Reliable** - Tidak bergantung pada koneksi internet
- ✅ **Kontrol Penuh** - Bisa play/pause/seek dengan mudah
- ✅ **Tidak Ada Autoplay Issues** - YouTube punya kebijakan autoplay yang ketat
- ✅ **Offline Support** - Bisa digunakan tanpa internet
- ✅ **Konsisten** - Video selalu tersedia, tidak ada masalah copyright/region
- ✅ **Sudah Terbukti** - Scene1.html sudah menggunakan metode ini

### Kekurangan:
- ❌ **Ukuran File** - Video bisa besar (tergantung kualitas)
- ❌ **Perlu Download** - Harus download video terlebih dahulu
- ❌ **Storage** - Membutuhkan space di server

### Cara Implementasi:

#### 1. Download Video YouTube
```bash
# Menggunakan yt-dlp (recommended) atau youtube-dl
yt-dlp -f "best[height<=720]" "https://www.youtube.com/watch?v=VIDEO_ID" -o "assets/asset scene 2/video_tutorial.mp4"

# Atau dengan format yang lebih kecil
yt-dlp -f "best[height<=480]" "https://www.youtube.com/watch?v=VIDEO_ID" -o "assets/asset scene 2/video_tutorial.mp4"
```

**Catatan Penting:**
- ⚠️ **Hak Cipta**: Pastikan video yang didownload memiliki izin untuk digunakan
- ⚠️ **Format**: Gunakan format MP4 untuk kompatibilitas terbaik
- ⚠️ **Kualitas**: Pilih kualitas yang sesuai (720p biasanya cukup)

#### 2. Struktur Folder
```
public/
  assets/
    asset scene 2/
      Desk.glb
      bunsen+burner.glb
      Petri+dish.glb
      cotton+swab+jar.glb
      LanzoTherm+3000.glb
      axe_deodorant.glb
      video_tutorial.mp4  ← Video disimpan di sini
```

#### 3. Kode di scene2.html

**A. Tambahkan ke `<a-assets>`:**
```html
<a-assets timeout="10000">
  <!-- ... asset GLB lainnya ... -->
  
  <!-- Video Tutorial -->
  <video 
    id="tutorialVideo" 
    playsinline 
    preload="auto" 
    crossorigin="anonymous"
    loop="false">
    <source src="assets/asset scene 2/video_tutorial.mp4" type="video/mp4">
  </video>
</a-assets>
```

**B. Tambahkan Video Entity di Scene:**
```html
<!-- Video Screen untuk Tutorial -->
<a-video 
  id="tutorialVideoScreen"
  src="#tutorialVideo"
  width="4"
  height="2.25"
  position="0 2 -5"
  rotation="0 0 0"
  material="side: double; shader: flat"
  class="clickable"
  visible="true">
</a-video>
```

**C. Kontrol Video (JavaScript):**
```javascript
// Play/Pause control
const videoEl = document.querySelector('#tutorialVideo');
const videoScreen = document.querySelector('#tutorialVideoScreen');

// Play video
function playVideo() {
  if (videoEl) {
    videoEl.play().catch(e => console.log('Video play failed:', e));
  }
}

// Pause video
function pauseVideo() {
  if (videoEl) {
    videoEl.pause();
  }
}

// Toggle play/pause
videoScreen.addEventListener('click', function() {
  if (videoEl.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
});
```

---

## 🔗 OPSI 2: EMBED YOUTUBE (TIDAK DIREKOMENDASIKAN)

### Keuntungan:
- ✅ **Tidak Perlu Download** - Langsung dari YouTube
- ✅ **Update Otomatis** - Jika video di-update, langsung terlihat
- ✅ **Tidak Membutuhkan Storage** - Tidak perlu space di server

### Kekurangan:
- ❌ **Autoplay Issues** - YouTube memblokir autoplay di banyak browser
- ❌ **Bergantung Internet** - Harus online terus
- ❌ **Kontrol Terbatas** - Sulit untuk kontrol programmatic
- ❌ **Region Block** - Bisa diblokir di beberapa region
- ❌ **Copyright Issues** - Bisa dihapus oleh YouTube
- ❌ **Kompleks di A-Frame** - Perlu iframe yang lebih rumit

### Cara Implementasi (Jika Tetap Ingin Menggunakan):

**A. Tambahkan iframe Component:**
```html
<!-- Install aframe-html-shader atau gunakan custom component -->
<script src="https://cdn.jsdelivr.net/npm/aframe-html-shader@1.0.0/dist/aframe-html-shader.min.js"></script>
```

**B. Embed YouTube:**
```html
<a-entity
  id="youtube-video"
  html-shader="
    html: <iframe width='560' height='315' src='https://www.youtube.com/embed/VIDEO_ID?autoplay=0&controls=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
  "
  width="4"
  height="2.25"
  position="0 2 -5"
  rotation="0 0 0">
</a-entity>
```

**⚠️ Catatan**: Metode ini **tidak direkomendasikan** karena banyak masalah kompatibilitas.

---

## 🎯 REKOMENDASI UNTUK SCENE2.HTML

### **Gunakan OPSI 1 (Download Video)** karena:

1. **Konsistensi** - Scene1.html sudah menggunakan metode ini
2. **Reliability** - Video selalu tersedia
3. **Kontrol** - Bisa diintegrasikan dengan interaksi 3D
4. **User Experience** - Tidak ada masalah autoplay atau loading

### Tata Letak Video di Scene2:

```
                    [Video Screen]
                          |
                          |
                    [Meja Lab]
                          |
                    [Peralatan]
```

**Posisi Video:**
- **Position**: `0 2 -5` (di atas meja, sedikit di belakang)
- **Size**: `width="4" height="2.25"` (16:9 aspect ratio)
- **Rotation**: `0 0 0` (menghadap kamera)

---

## 📋 CHECKLIST IMPLEMENTASI VIDEO

### Phase 1: Persiapan
- [ ] Download video YouTube menggunakan yt-dlp
- [ ] Simpan video di `assets/asset scene 2/video_tutorial.mp4`
- [ ] Pastikan format MP4 dan kualitas sesuai (720p recommended)
- [ ] Cek ukuran file (usahakan < 50MB untuk performa)

### Phase 2: Implementasi
- [ ] Tambahkan `<video>` tag di `<a-assets>`
- [ ] Tambahkan `<a-video>` entity di scene
- [ ] Test loading video
- [ ] Test play/pause functionality

### Phase 3: Enhancement (Optional)
- [ ] Tambahkan play/pause button
- [ ] Tambahkan progress bar
- [ ] Tambahkan volume control
- [ ] Tambahkan fullscreen option

---

## 🔧 TOOLS UNTUK DOWNLOAD VIDEO YOUTUBE

### 1. yt-dlp (Recommended)
```bash
# Install
pip install yt-dlp

# Download
yt-dlp -f "best[height<=720]" "YOUTUBE_URL" -o "output.mp4"
```

### 2. youtube-dl (Alternative)
```bash
# Install
pip install youtube-dl

# Download
youtube-dl -f "best[height<=720]" "YOUTUBE_URL" -o "output.mp4"
```

### 3. Online Tools (Alternatif)
- https://www.y2mate.com/
- https://savefrom.net/
- https://en.savefrom.net/

**⚠️ Catatan**: Pastikan menggunakan video yang legal dan memiliki izin.

---

## 📐 TATA LETAK VIDEO DI SCENE2

### Posisi Video Screen:
```html
<!-- Video Tutorial Screen -->
<a-video 
  id="tutorialVideoScreen"
  src="#tutorialVideo"
  width="4"
  height="2.25"
  position="0 2.5 -4.5"
  rotation="0 0 0"
  material="side: double; shader: flat"
  class="clickable"
  visible="true">
</a-video>

<!-- Frame untuk Video (Optional) -->
<a-box
  width="4.2"
  height="2.45"
  depth="0.1"
  position="0 2.5 -4.5"
  material="color: #333; metalness: 0.8; roughness: 0.2"
  rotation="0 0 0">
</a-box>
```

### Layout dengan Meja:
```
        [Video Screen]
              |
              |
        [Meja Lab]
    [Bunsen] [Petri] [Thermo]
```

---

## ⚠️ CATATAN PENTING

1. **Hak Cipta**: Pastikan video yang didownload memiliki izin untuk digunakan
2. **Format Video**: Gunakan MP4 dengan codec H.264 untuk kompatibilitas terbaik
3. **Ukuran File**: Usahakan video < 50MB untuk performa yang baik
4. **Kualitas**: 720p biasanya cukup untuk tutorial
5. **Path**: Pastikan path `assets/asset scene 2/` benar (perhatikan spasi)
6. **CORS**: Jika ada masalah CORS, pastikan server mengizinkan

---

## 🎬 CONTOH IMPLEMENTASI LENGKAP

```html
<!-- Di <a-assets> -->
<video 
  id="tutorialVideo" 
  playsinline 
  preload="auto" 
  crossorigin="anonymous"
  loop="false">
  <source src="assets/asset scene 2/video_tutorial.mp4" type="video/mp4">
</video>

<!-- Di Scene -->
<a-entity id="video-area" position="0 2.5 -4.5">
  <!-- Video Frame -->
  <a-box
    width="4.2"
    height="2.45"
    depth="0.1"
    position="0 0 0"
    material="color: #1a1a1a; metalness: 0.8; roughness: 0.2">
  </a-box>
  
  <!-- Video Screen -->
  <a-video 
    id="tutorialVideoScreen"
    src="#tutorialVideo"
    width="4"
    height="2.25"
    position="0 0 0.06"
    rotation="0 0 0"
    material="side: double; shader: flat"
    class="clickable">
  </a-video>
  
  <!-- Play/Pause Button (Optional) -->
  <a-box
    id="playPauseBtn"
    width="0.3"
    height="0.3"
    depth="0.05"
    position="0 -1.3 0.1"
    material="color: #4CC3D9"
    class="clickable">
  </a-box>
  <a-text
    value="▶"
    position="0 -1.3 0.15"
    align="center"
    color="#fff"
    width="2">
  </a-text>
</a-entity>
```

---

**Kesimpulan**: **Download video YouTube dan simpan sebagai file lokal** adalah metode terbaik untuk scene2.html, mengikuti pola yang sudah digunakan di scene1.html.

