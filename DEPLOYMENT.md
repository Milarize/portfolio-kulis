# การ Deploy บน GitHub Pages

## ขั้นตอนการ Deploy

### 1. เตรียมโปรเจค
```bash
# Install dependencies
npm install

# Build โปรเจค
npm run build
```

### 2. ตั้งค่า GitHub Pages

1. ไปที่ GitHub repository
2. ไปที่ Settings > Pages
3. เลือก Source เป็น "Deploy from a branch"
4. เลือก Branch เป็น "main" และ Folder เป็น "/ (root)"
5. กด Save

### 3. ตั้งค่า GitHub Actions (แนะนำ)

สร้างไฟล์ `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. ตรวจสอบรูปภาพ

ตรวจสอบว่ารูปภาพอยู่ในตำแหน่งที่ถูกต้อง:
- `public/image/profile.png` ✅
- `public/projects/ecommerce.jpg` ✅
- `public/projects/taskapp.jpg` ✅

### 5. ตรวจสอบ Path ในโค้ด

ตรวจสอบว่า path ในโค้ดถูกต้อง:
- `src/components/Home.vue`: `/image/profile.png` ✅
- `src/components/Projects.vue`: `/projects/ecommerce.jpg`, `/projects/taskapp.jpg` ✅

## ปัญหาที่พบบ่อย

### รูปภาพไม่แสดง
1. ตรวจสอบว่าไฟล์รูปภาพอยู่ใน `public/` folder
2. ตรวจสอบ path ในโค้ดว่าถูกต้อง
3. ตรวจสอบว่าไฟล์รูปภาพมีขนาดไม่เกิน GitHub Pages limit

### 404 Error
1. ตรวจสอบ `base` ใน `vite.config.js` ว่าตรงกับ repository name
2. ตรวจสอบว่า build ผ่านแล้ว
3. รอสักครู่ให้ GitHub Pages deploy เสร็จ

## หมายเหตุ

- GitHub Pages จะใช้ URL: `https://username.github.io/repository-name/`
- ต้องรอ 5-10 นาทีหลัง push เพื่อให้ deploy เสร็จ
- ตรวจสอบ Actions tab ใน GitHub เพื่อดูสถานะการ deploy 