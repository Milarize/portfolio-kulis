# การ Deploy บน GitHub Pages

## ขั้นตอนการ Deploy

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. Build โปรเจค
```bash
npm run build
```

### 3. Deploy ไปยัง GitHub Pages
```bash
npm run deploy
```

## การตั้งค่า GitHub Repository

1. ไปที่ GitHub repository ของคุณ
2. ไปที่ Settings > Pages
3. ในส่วน "Source" เลือก "Deploy from a branch"
4. เลือก branch "gh-pages" และ folder "/ (root)"
5. กด Save

## การใช้ GitHub Actions (แนะนำ)

หากคุณใช้ GitHub Actions workflow ที่สร้างไว้แล้ว:
1. Push code ไปยัง branch `main`
2. GitHub Actions จะ build และ deploy อัตโนมัติ
3. เว็บไซต์จะพร้อมใช้งานที่ `https://[username].github.io/kulisara.t/`

## หมายเหตุ

- เปลี่ยน `kulisara.t` ใน `vite.config.js` เป็นชื่อ repository ของคุณ
- ตรวจสอบให้แน่ใจว่า repository เป็น public หรือมี GitHub Pro สำหรับ private repository 