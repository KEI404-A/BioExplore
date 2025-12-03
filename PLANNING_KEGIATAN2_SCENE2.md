# PLANNING KEGIATAN 2 - SCENE2.HTML
## Eksperimen Biologi: Observasi dan Analisis

---

## 📚 ANALISIS KONTEKS

### Berdasarkan Asset yang Tersedia:
- **Desk.glb** - Meja laboratorium
- **bunsen+burner.glb** - Pembakar Bunsen (sterilisasi)
- **Petri+dish.glb** - Cawan Petri (biakan bakteri)
- **cotton+swab+jar.glb** - Kapas dalam toples (sampling)
- **LanzoTherm+3000.glb** - Termometer (pengukuran suhu)
- **axe_deodorant.glb** - Deodoran (bahan uji)

### Tema Eksperimen (Prediksi):
Berdasarkan asset, kemungkinan eksperimen tentang:
- **Bakteri pada tubuh** (karena ada cotton swab, petri dish, deodorant)
- **Pengaruh deodoran terhadap pertumbuhan bakteri**
- **Sterilisasi dan kultur bakteri**

---

## 🎯 STRUKTUR KEGIATAN 2

Mengikuti pola dari Scene1.html, kegiatan 2 akan memiliki struktur:

### **Flow Kegiatan:**
1. **Introduction** - User masuk ke laboratorium
2. **Instruction Panel** - Instruksi kegiatan muncul
3. **Button "Mulai Eksperimen"** - Memulai kegiatan
4. **Observasi Interaktif** - User berinteraksi dengan peralatan
5. **Hasil Eksperimen** - Menampilkan hasil observasi
6. **Final Question** - Pertanyaan evaluasi

---

## 📋 DETAIL PER KOMponen

### 1. INTRODUCTION & ENVIRONMENT SETUP

**Tujuan**: User masuk ke laboratorium dan melihat setup eksperimen

**Implementasi**:
```html
<!-- Laboratory Environment -->
<a-entity id="laboratory-setup">
  <!-- Meja dan peralatan sudah di-place sesuai planning sebelumnya -->
</a-entity>

<!-- Welcome Text (Optional) -->
<a-text 
  value="LABORATORIUM BIOLOGI"
  position="0 3 -2"
  align="center"
  color="#4CC3D9"
  width="8"
  scale="1.5 1.5 1.5"
  material="depthTest: false; transparent: true">
</a-text>
```

---

### 2. INSTRUCTION PANEL

**Tujuan**: Memberikan instruksi kegiatan kepada user

**Lokasi**: Floating panel di depan user atau di dinding

**Konten**:
- Judul kegiatan
- Tujuan pembelajaran
- Langkah-langkah eksperimen
- Button "Mulai Eksperimen"

**Implementasi**:
```html
<!-- Instruction Panel -->
<a-entity id="instruction-panel" position="0 2 -4" rotation="0 0 0">
  <!-- Background Panel -->
  <a-box
    width="5"
    height="3"
    depth="0.1"
    color="#1a1a2e"
    opacity="0.95"
    material="metalness: 0.7; roughness: 0.3">
  </a-box>
  
  <!-- Title -->
  <a-text
    value="KEGIATAN 2: EKSPERIMEN BIOLOGI"
    position="0 1.2 0.06"
    align="center"
    color="#4CC3D9"
    width="6"
    material="depthTest: false; transparent: true">
  </a-text>
  
  <!-- Instructions -->
  <a-text
    id="instruction-text"
    value="1. Ambil sampel menggunakan cotton swab\n2. Oleskan ke cawan petri\n3. Tambahkan deodoran\n4. Amati pertumbuhan bakteri"
    position="0 0.3 0.06"
    align="center"
    color="#ffffff"
    width="4.5"
    line-height="50"
    material="depthTest: false; transparent: true">
  </a-text>
  
  <!-- Start Button -->
  <a-box
    id="btnStartExperiment"
    class="clickable"
    width="2"
    height="0.5"
    depth="0.1"
    position="0 -1 0.06"
    color="#4CC3D9"
    material="metalness: 0.8; roughness: 0.2"
    event-set__mouseenter="scale:1.1 1.1 1.1; color:#7bdcff"
    event-set__mouseleave="scale:1 1 1; color:#4CC3D9">
  </a-box>
  <a-text
    value="MULAI EKSPERIMEN"
    position="0 -1 0.11"
    align="center"
    color="#ffffff"
    width="3"
    material="depthTest: false; transparent: true">
  </a-text>
</a-entity>
```

---

### 3. INTERACTIVE EXPERIMENT PHASE

**Tujuan**: User berinteraksi dengan peralatan laboratorium

**Fitur Interaktif**:

#### A. Cotton Swab (Sampling)
- **Click**: Ambil cotton swab dari toples
- **Feedback**: Cotton swab muncul di tangan user (visual)
- **Action**: Siap untuk sampling

#### B. Petri Dish (Culture)
- **Click**: Oleskan sampel ke petri dish
- **Feedback**: Visual perubahan pada petri dish
- **Action**: Sampel ditambahkan

#### C. Deodorant (Treatment)
- **Click**: Tambahkan deodoran ke petri dish
- **Feedback**: Visual deodoran di petri dish
- **Action**: Treatment diterapkan

#### D. Bunsen Burner (Sterilization)
- **Click**: Nyalakan/matikan bunsen burner
- **Feedback**: Api muncul/hilang
- **Action**: Sterilisasi dilakukan

#### E. Thermometer (Measurement)
- **Click**: Ukur suhu
- **Feedback**: Menampilkan nilai suhu
- **Action**: Data suhu tercatat

**Implementasi**:
```html
<!-- Interactive Equipment dengan Click Handlers -->
<a-entity
  id="cotton-jar"
  gltf-model="#cotton-jar-model"
  position="-1.5 0.5 -2.5"
  class="clickable lab-equipment"
  data-action="take-sample">
  <!-- Label -->
  <a-text
    value="Ambil Sampel"
    position="0 0.5 0"
    align="center"
    color="#fff"
    width="3"
    visible="false"
    id="cotton-label">
  </a-text>
</a-entity>

<a-entity
  id="petri-dish"
  gltf-model="#petri-model"
  position="0.2 0.75 -3"
  class="clickable lab-equipment"
  data-action="apply-sample">
  <!-- Label -->
  <a-text
    value="Oleskan Sampel"
    position="0 0.3 0"
    align="center"
    color="#fff"
    width="3"
    visible="false"
    id="petri-label">
  </a-text>
</a-entity>

<!-- Similar untuk equipment lainnya -->
```

---

### 4. OBSERVATION RESULTS

**Tujuan**: Menampilkan hasil eksperimen setelah user melakukan interaksi

**Konten yang Ditampilkan**:
- **Images**: Gambar hasil observasi (seperti di scene1.html)
  - Gambar bakteri sebelum treatment
  - Gambar bakteri setelah treatment
  - Perbandingan hasil

- **Data Display**: 
  - Suhu yang tercatat
  - Waktu observasi
  - Perubahan yang terjadi

**Implementasi**:
```html
<!-- Observation Results (Initially Hidden) -->
<a-entity id="observation-results" class="observation-content" visible="false">
  
  <!-- Result Image 1: Before -->
  <a-image
    id="result-before"
    src="#bacteria-before-image"
    width="3"
    height="2"
    position="-2 1.5 -5"
    rotation="0 0 0"
    material="side: double; shader: flat; opacity: 0"
    visible="false">
  </a-image>
  
  <!-- Result Image 2: After -->
  <a-image
    id="result-after"
    src="#bacteria-after-image"
    width="3"
    height="2"
    position="2 1.5 -5"
    rotation="0 0 0"
    material="side: double; shader: flat; opacity: 0"
    visible="false">
  </a-image>
  
  <!-- Data Panel -->
  <a-box
    width="4"
    height="2"
    depth="0.1"
    position="0 0.5 -5"
    color="#1a1a2e"
    opacity="0.9">
  </a-box>
  <a-text
    id="experiment-data"
    value="Suhu: 37°C\nWaktu: 24 jam\nHasil: Pertumbuhan bakteri berkurang"
    position="0 0.5 -4.95"
    align="center"
    color="#fff"
    width="3.5"
    line-height="50">
  </a-text>
</a-entity>
```

---

### 5. FINAL QUESTION POPUP

**Tujuan**: Evaluasi pemahaman user setelah eksperimen

**Format**: 
- Pertanyaan multiple choice atau essay
- Muncul setelah observasi selesai
- Auto-hide setelah beberapa detik atau user submit

**Implementasi**:
```html
<!-- Final Question Popup -->
<div id="finalQuestionPopup" class="final-question-popup" style="display: none;">
  <div class="question-container">
    <h3>Pertanyaan Evaluasi</h3>
    <div class="question-item">
      <p>1. Apa yang terjadi pada bakteri setelah diberi deodoran?</p>
      <input type="radio" name="q1" value="a"> A. Bakteri mati<br>
      <input type="radio" name="q1" value="b"> B. Bakteri berkembang<br>
      <input type="radio" name="q1" value="c"> C. Bakteri tidak berubah<br>
    </div>
    <div class="question-item">
      <p>2. Mengapa deodoran dapat mempengaruhi pertumbuhan bakteri?</p>
      <textarea id="answer2" rows="3"></textarea>
    </div>
    <button id="submitAnswer">Submit</button>
  </div>
</div>
```

---

## 🔄 FLOW DIAGRAM KEGIATAN

```
[User Masuk Scene2]
        |
        v
[Lihat Laboratorium + Instruction Panel]
        |
        v
[Klik "Mulai Eksperimen"]
        |
        v
[Instruction Panel Hilang]
        |
        v
[Interaksi dengan Peralatan]
    |
    +-- [Ambil Cotton Swab]
    |       |
    |       v
    |   [Oleskan ke Petri Dish]
    |       |
    |       v
    |   [Tambahkan Deodoran]
    |       |
    |       v
    |   [Nyalakan Bunsen (Optional)]
    |       |
    |       v
    |   [Ukur Suhu]
    |
    v
[Hasil Observasi Muncul]
    |
    v
[Final Question Popup]
    |
    v
[Selesai]
```

---

## 🎨 UI/UX ELEMENTS

### A. Button Styles
- Mengikuti style dari scene1.html
- Hover effects dengan scale dan color change
- Click feedback dengan animation

### B. Labels & Tooltips
- Label muncul saat hover pada equipment
- Tooltip dengan informasi alat
- Highlight saat bisa diinteraksi

### C. Progress Indicator (Optional)
- Progress bar untuk langkah eksperimen
- Checklist langkah yang sudah dilakukan

### D. Info Panels
- Panel informasi untuk setiap alat
- Data display untuk hasil pengukuran
- Comparison view untuk before/after

---

## 📦 ASSETS YANG DIPERLUKAN

### Sudah Tersedia:
- ✅ Desk.glb
- ✅ bunsen+burner.glb
- ✅ Petri+dish.glb
- ✅ cotton+swab+jar.glb
- ✅ LanzoTherm+3000.glb
- ✅ axe_deodorant.glb

### Perlu Ditambahkan:
- [ ] **Images untuk hasil observasi**:
  - `bacteria-before.jpg` - Bakteri sebelum treatment
  - `bacteria-after.jpg` - Bakteri setelah treatment
  - `petri-dish-sample.jpg` - Sampel di petri dish
  
- [ ] **Audio (Optional)**:
  - Sound effect untuk click
  - Sound effect untuk bunsen burner
  - Background music (optional)

---

## 💻 STRUKTUR KODE JAVASCRIPT

### A. State Management
```javascript
const experimentState = {
  step: 0, // 0: intro, 1: sampling, 2: culture, 3: treatment, 4: observation, 5: question
  sampleTaken: false,
  sampleApplied: false,
  deodorantAdded: false,
  bunsenOn: false,
  temperature: null,
  observationComplete: false
};
```

### B. Event Handlers
```javascript
// Start Experiment Button
document.getElementById('btnStartExperiment').addEventListener('click', function() {
  // Hide instruction panel
  // Show interactive equipment
  // Enable interactions
  experimentState.step = 1;
});

// Equipment Click Handlers
document.querySelectorAll('.lab-equipment').forEach(equipment => {
  equipment.addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    handleEquipmentAction(action);
  });
});

function handleEquipmentAction(action) {
  switch(action) {
    case 'take-sample':
      takeSample();
      break;
    case 'apply-sample':
      applySample();
      break;
    case 'add-deodorant':
      addDeodorant();
      break;
    case 'toggle-bunsen':
      toggleBunsen();
      break;
    case 'measure-temperature':
      measureTemperature();
      break;
  }
}
```

### C. Observation Display
```javascript
function showObservationResults() {
  // Show result images
  document.querySelector('#result-before').setAttribute('visible', 'true');
  document.querySelector('#result-after').setAttribute('visible', 'true');
  
  // Show data panel
  document.querySelector('#experiment-data').setAttribute('visible', 'true');
  
  // Show final question after delay
  setTimeout(() => {
    showFinalQuestion();
  }, 5000);
}
```

---

## 📝 CHECKLIST IMPLEMENTASI

### Phase 1: Basic Setup
- [ ] Load semua asset GLB
- [ ] Place semua peralatan di posisi yang tepat
- [ ] Test loading dan positioning
- [ ] Add collision detection

### Phase 2: UI Elements
- [ ] Buat instruction panel
- [ ] Buat button "Mulai Eksperimen"
- [ ] Add labels untuk setiap equipment
- [ ] Style buttons dan panels

### Phase 3: Interactivity
- [ ] Implement click handlers untuk equipment
- [ ] Add visual feedback saat click
- [ ] Implement state management
- [ ] Add progress tracking

### Phase 4: Observation Results
- [ ] Prepare images untuk hasil observasi
- [ ] Implement observation display
- [ ] Add data display panel
- [ ] Add before/after comparison

### Phase 5: Final Question
- [ ] Design question popup
- [ ] Implement question display
- [ ] Add submit functionality
- [ ] Add auto-hide timer

### Phase 6: Polish
- [ ] Add animations
- [ ] Add sound effects (optional)
- [ ] Fine-tune positioning
- [ ] Test semua interaksi
- [ ] Optimize performance

---

## 🎯 HASIL AKHIR YANG DIHARAPKAN

Sebuah laboratorium biologi interaktif dengan:
- ✅ Environment 3D yang realistis
- ✅ Peralatan laboratorium yang bisa diinteraksi
- ✅ Flow eksperimen yang jelas dan terstruktur
- ✅ Hasil observasi yang informatif
- ✅ Evaluasi melalui pertanyaan akhir
- ✅ User experience yang smooth dan engaging

---

## ⚠️ CATATAN PENTING

1. **Mengikuti Pola Scene1**: Struktur mengikuti scene1.html untuk konsistensi
2. **Interaktivitas**: Semua equipment harus bisa di-click dan memberikan feedback
3. **Visual Feedback**: Setiap action harus ada visual feedback yang jelas
4. **State Management**: Track progress user melalui state management
5. **Images**: Perlu images untuk hasil observasi (belum ada di asset)
6. **Performance**: File cotton+swab+jar.glb (58MB) perlu optimasi

---

**Dibuat untuk**: Scene2.html - Kegiatan 2 BioExplore
**Berdasarkan**: Pola Scene1.html + Asset yang tersedia
**Status**: Ready for Implementation

