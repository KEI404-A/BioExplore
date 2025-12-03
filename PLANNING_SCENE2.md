# PLANNING TATA LETAK SCENE2.HTML - KEGIATAN 2

## 📋 ANALISIS ASSET YANG TERSEDIA

### Asset GLB yang Tersedia:
1. **Desk.glb** (84KB) - Meja laboratorium
2. **bunsen+burner.glb** (3.1KB) - Pembakar Bunsen
3. **Petri+dish.glb** (222KB) - Cawan Petri
4. **cotton+swab+jar.glb** (58MB) - Kapas dalam toples
5. **LanzoTherm+3000.glb** (382KB) - Termometer/Alat pengukur suhu
6. **axe_deodorant.glb** (341KB) - Deodoran/Bahan kimia

## 🎯 KONSEP TATA LETAK LABORATORIUM

### Zona Utama:
1. **Area Meja Kerja Utama** (Center Stage)
2. **Area Penyimpanan Bahan** (Side Area)
3. **Area Peralatan Eksperimen** (Workbench)

---

## 📐 DETAIL TATA LETAK 3D

### 1. MEJA LABORATORIUM UTAMA (Desk.glb)
- **Posisi**: `position="0 0 -3"`
- **Rotasi**: `rotation="0 0 0"`
- **Skala**: `scale="1 1 1"` (atau disesuaikan dengan ukuran sebenarnya)
- **Fungsi**: Meja utama untuk melakukan eksperimen
- **Tinggi**: ~0.75m (standar meja lab)
- **Dimensi**: ~1.2m x 0.6m

### 2. PEMBAKAR BUNSEN (bunsen+burner.glb)
- **Posisi**: `position="-0.3 0.75 -3"` (di atas meja, sedikit ke kiri)
- **Rotasi**: `rotation="0 0 0"`
- **Skala**: `scale="0.5 0.5 0.5"` (atau disesuaikan)
- **Fungsi**: Alat pemanas untuk eksperimen
- **Interaksi**: Bisa dinyalakan/matikan (future feature)

### 3. CAWAN PETRI (Petri+dish.glb)
- **Posisi**: `position="0.2 0.75 -3"` (di atas meja, sedikit ke kanan)
- **Rotasi**: `rotation="0 0 0"`
- **Skala**: `scale="0.3 0.3 0.3"` (atau disesuaikan)
- **Fungsi**: Wadah untuk sampel/biakan
- **Interaksi**: Bisa diambil/diletakkan (future feature)

### 4. TERMOMETER (LanzoTherm+3000.glb)
- **Posisi**: `position="0.5 0.75 -3"` (di atas meja, di kanan)
- **Rotasi**: `rotation="0 0 0"`
- **Skala**: `scale="0.4 0.4 0.4"` (atau disesuaikan)
- **Fungsi**: Mengukur suhu
- **Interaksi**: Menampilkan suhu (future feature)

### 5. TOPLES KAPAS (cotton+swab+jar.glb)
- **Posisi**: `position="-1.5 0.5 -2.5"` (di samping meja, area penyimpanan)
- **Rotasi**: `rotation="0 0 0"`
- **Skala**: `scale="0.8 0.8 0.8"` (atau disesuaikan)
- **Fungsi**: Penyimpanan kapas untuk sampling
- **Tinggi**: ~0.3m dari lantai

### 6. DEODORAN/BAHAN KIMIA (axe_deodorant.glb)
- **Posisi**: `position="1.5 0.5 -2.5"` (di samping meja, area penyimpanan)
- **Rotasi**: `rotation="0 0 0"`
- **Skala**: `scale="0.6 0.6 0.6"` (atau disesuaikan)
- **Fungsi**: Bahan kimia untuk eksperimen
- **Tinggi**: ~0.3m dari lantai

---

## 🏗️ STRUKTUR KODE YANG AKAN DITAMBAHKAN

### A. ASSETS SECTION (di dalam `<a-assets>`)
```html
<!-- GLB Models untuk Scene 2 -->
<a-asset-item id="desk-model" src="assets/asset scene 2/Desk.glb"></a-asset-item>
<a-asset-item id="bunsen-model" src="assets/asset scene 2/bunsen+burner.glb"></a-asset-item>
<a-asset-item id="petri-model" src="assets/asset scene 2/Petri+dish.glb"></a-asset-item>
<a-asset-item id="cotton-jar-model" src="assets/asset scene 2/cotton+swab+jar.glb"></a-asset-item>
<a-asset-item id="thermometer-model" src="assets/asset scene 2/LanzoTherm+3000.glb"></a-asset-item>
<a-asset-item id="deodorant-model" src="assets/asset scene 2/axe_deodorant.glb"></a-asset-item>
```

### B. LABORATORY SETUP SECTION (setelah fallback-environment)
```html
<!-- Laboratory Setup -->
<a-entity id="laboratory-setup">
  
  <!-- Meja Laboratorium Utama -->
  <a-entity
    id="main-desk"
    gltf-model="#desk-model"
    position="0 0 -3"
    rotation="0 0 0"
    scale="1 1 1"
    shadow="cast: true; receive: true">
  </a-entity>

  <!-- Pembakar Bunsen -->
  <a-entity
    id="bunsen-burner"
    gltf-model="#bunsen-model"
    position="-0.3 0.75 -3"
    rotation="0 0 0"
    scale="0.5 0.5 0.5"
    class="clickable lab-equipment"
    shadow="cast: true; receive: true">
  </a-entity>

  <!-- Cawan Petri -->
  <a-entity
    id="petri-dish"
    gltf-model="#petri-model"
    position="0.2 0.75 -3"
    rotation="0 0 0"
    scale="0.3 0.3 0.3"
    class="clickable lab-equipment"
    shadow="cast: true; receive: true">
  </a-entity>

  <!-- Termometer -->
  <a-entity
    id="thermometer"
    gltf-model="#thermometer-model"
    position="0.5 0.75 -3"
    rotation="0 0 0"
    scale="0.4 0.4 0.4"
    class="clickable lab-equipment"
    shadow="cast: true; receive: true">
  </a-entity>

  <!-- Toples Kapas -->
  <a-entity
    id="cotton-jar"
    gltf-model="#cotton-jar-model"
    position="-1.5 0.5 -2.5"
    rotation="0 0 0"
    scale="0.8 0.8 0.8"
    class="clickable lab-equipment"
    shadow="cast: true; receive: true">
  </a-entity>

  <!-- Deodoran/Bahan Kimia -->
  <a-entity
    id="deodorant"
    gltf-model="#deodorant-model"
    position="1.5 0.5 -2.5"
    rotation="0 0 0"
    scale="0.6 0.6 0.6"
    class="clickable lab-equipment"
    shadow="cast: true; receive: true">
  </a-entity>

</a-entity>
```

---

## 📏 DIMENSI DAN SPASI

### Grid Layout (dalam meter):
```
        [Deodorant]     [Thermometer]
              |              |
              |    [Petri]   |
              |              |
[Kapas Jar]   |   [Bunsen]   |
              |              |
              |   [DESK]     |
              |              |
         -2.5m        0m        2.5m
```

### Tinggi dari Lantai:
- **Lantai**: 0m
- **Meja**: 0.75m
- **Alat di atas meja**: 0.75m (tinggi meja)
- **Alat di samping**: 0.5m (rak/storage)

### Jarak dari Kamera Awal:
- **Kamera start**: `position="0 1.6 8"`
- **Meja utama**: `position="0 0 -3"` (11m dari kamera)
- **Area kerja**: Di depan kamera, mudah dijangkau

---

## 🎨 ENHANCEMENT YANG DISARANKAN

### 1. Lighting untuk Laboratorium
- Tambahkan **spotlight** di atas meja kerja
- **Ambient light** untuk suasana lab yang terang
- **Point light** di area penyimpanan

### 2. Label/Info Text
- Label nama alat di bawah setiap objek
- Info tooltip saat hover (future feature)

### 3. Collision Detection
- Tambahkan class `collidable` ke meja dan rak
- Pastikan player tidak bisa menembus objek

### 4. Visual Feedback
- Highlight saat hover pada alat yang bisa diinteraksi
- Animation saat interaksi (future feature)

---

## 🔄 URUTAN IMPLEMENTASI

### Phase 1: Basic Layout (Sekarang)
1. ✅ Load semua asset GLB ke dalam `<a-assets>`
2. ✅ Place meja di posisi center
3. ✅ Place semua alat di posisi yang sudah direncanakan
4. ✅ Test loading dan positioning

### Phase 2: Refinement (Setelah Phase 1)
1. Adjust scale setiap model agar proporsional
2. Fine-tune positioning untuk natural look
3. Add lighting yang sesuai
4. Add labels/info text

### Phase 3: Interaction (Future)
1. Add click handlers untuk setiap alat
2. Add tooltip/info panel
3. Add animation/interaction feedback
4. Add sound effects (optional)

---

## ⚠️ CATATAN PENTING

1. **Path Asset**: Pastikan path `assets/asset scene 2/` benar
2. **Scale**: Setiap model mungkin perlu adjustment scale
3. **Rotation**: Beberapa model mungkin perlu rotasi
4. **Performance**: File `cotton+swab+jar.glb` (58MB) sangat besar, pertimbangkan optimasi
5. **Collision**: Pastikan meja dan objek besar memiliki collision detection
6. **Testing**: Test di berbagai device untuk memastikan performa baik

---

## 📝 CHECKLIST IMPLEMENTASI

- [ ] Tambahkan asset items ke `<a-assets>`
- [ ] Buat entity container `laboratory-setup`
- [ ] Place meja (Desk.glb) di center
- [ ] Place Bunsen burner di atas meja
- [ ] Place Petri dish di atas meja
- [ ] Place Thermometer di atas meja
- [ ] Place Cotton jar di samping kiri
- [ ] Place Deodorant di samping kanan
- [ ] Adjust scale semua model
- [ ] Test loading semua asset
- [ ] Test collision detection
- [ ] Fine-tune positioning
- [ ] Add lighting enhancement
- [ ] Add labels (optional)

---

## 🎯 HASIL AKHIR YANG DIHARAPKAN

Sebuah laboratorium biologi 3D dengan:
- ✅ Meja kerja utama di center
- ✅ Peralatan eksperimen tersusun rapi di atas meja
- ✅ Bahan-bahan tersimpan di area samping
- ✅ Layout yang natural dan mudah dinavigasi
- ✅ Siap untuk interaksi dan eksperimen (future)

---

**Dibuat untuk**: Scene2.html - Kegiatan 2 BioExplore
**Tanggal**: Planning Document
**Status**: Ready for Implementation

