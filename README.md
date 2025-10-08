เว็บไซต์ของโปรเจกต์ **ComaSport** — frontend + backend (Node.js / Express / EJS)  

## 💡 โครงสร้างโปรเจกต์

```
ComaSport‑Website/
├── app.js
├── package.json
├── package-lock.json
├── public/
├── views/
├── routes/
├── models/
├── tailwind.config.js
└── postcss.config.js
```

- `app.js` — จุดเข้าหลัก (entry point) ของแอป
- `routes/` — ไฟล์จัดการเส้นทาง (routes) ของเว็บ
- `views/` — โฟลเดอร์สำหรับไฟล์ EJS templates
- `models/` — ส่วนจัดการโมเดล (สำหรับติดต่อกับฐานข้อมูล)
- `public/` — ไฟลเดอร์สำหรับไฟล์ static (CSS, JS, รูปภาพ ฯลฯ)
- `tailwind.config.js` / `postcss.config.js` — การตั้งค่าสำหรับ Tailwind CSS / PostCSS

## 📋 ข้อกำหนดเบื้องต้น (Prerequisites)

ก่อนติดตั้ง ให้แน่ใจว่าคุณมี:

- Node.js (แนะนำเวอร์ชัน 14.x ขึ้นไป)  
- npm หรือ yarn  
- ฐานข้อมูล (เช่น MySQL, PostgreSQL, MongoDB — แล้วแต่ที่โครงการกำหนด)  
- ตัวแปรแวดล้อม (Environment variables) สำหรับการเชื่อมต่อฐานข้อมูล, secret keys ฯลฯ  

## 🚀 วิธีติดตั้งและรันโปรเจกต์ (Local)

1. โคลน (clone) โปรเจกต์มาที่เครื่องคุณ  
   ```bash
   git clone https://github.com/BoxDusit/ComaSport-Website.git
   cd ComaSport-Website
   ```

2. ติดตั้ง dependencies  
   ```bash
   npm install
   # หรือถ้าใช้ yarn
   # yarn install
   ```

3. ตั้งค่าตัวแปรแวดล้อม (Environment)  
   คุณอาจต้องสร้างไฟล์ `.env` (หรือไฟล์ config อื่นตามที่โครงการใช้) และใส่ค่าต่าง ๆ เช่น:  
   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=coma_sport_db
   JWT_SECRET=your_jwt_secret
   ```
   (ปรับตามชื่อและชนิดฐานข้อมูลของคุณ)

4. รัน migrations / seed data (ถ้ามี)  
   ถ้าโครงการมีสคริปต์สำหรับสร้างตารางฐานข้อมูล หรือใส่ข้อมูลตัวอย่าง ให้ใช้งาน เช่น  
   ```bash
   npm run migrate
   npm run seed
   ```

5. สตาร์ทเซิร์ฟเวอร์  
   ```bash
   npm run dev
   # หรือ
   npm start
   ```

6. เปิดเบราว์เซอร์ไปที่:  
   ```
   http://localhost:3000
   ```
   (หรือพอร์ตที่ตั้งไว้ในตัวแปร PORT)

## 🧪 สคริปต์ที่มีใน package.json

| คำสั่ง | คำอธิบาย |
|---|---|
| `npm run dev` | เปิดเซิร์ฟเวอร์ในโหมดพัฒนา (hot reload ถ้ามี) |
| `npm start` | รันเซิร์ฟเวอร์ในโหมด production |
| `npm run migrate` | รัน migrations สร้างตารางฐานข้อมูล (ถ้ามี) |
| `npm run seed` | ใส่ข้อมูลตัวอย่าง (ถ้ามี) |

## ✅ วิธีทดสอบ / ตรวจสอบ

- ถ้ามี unit test / integration test ให้รัน เช่น  
  ```bash
  npm test
  ```
- ตรวจสอบ logs บน console ว่าไม่มี error  
- ตรวจสอบ API endpoints ต่าง ๆ ผ่าน Postman / curl  
- ตรวจสอบว่าแอปสามารถเชื่อมต่อฐานข้อมูลได้ถูกต้อง

## 🛠️ การ deploy (เบื้องต้น)

1. สร้าง build (ถ้ามีขั้นตอน build สำหรับ frontend)  
2. ตั้งค่าตัวแปรแวดล้อมบนเซิร์ฟเวอร์ (Production)  
3. สั่ง `npm install --production`  
4. รันแอปโดยใช้ process manager เช่น PM2  
   ```bash
   pm2 start app.js --name comasport
   ```
5. ตั้ง reverse proxy (เช่น Nginx) ให้ส่ง traffic เข้าพอร์ตที่แอปรันอยู่  
6. ตั้ง SSL / HTTPS  

## 📂 โครงสร้างไฟล์เพิ่มเติมที่ควรใส่ใน README

- เอกสาร API (endpoints, parameters, response)  
- ตัวอย่าง request / response  
- รายละเอียด schema ของฐานข้อมูล / ER Diagram  
- แนวทางการขยาย (scaling, caching, logging, security)  
- รายชื่อ contributors  
- ใบอนุญาต (LICENSE)  

## ✍️ สุดท้าย

โปรเจกต์นี้เป็นจุดเริ่มต้นที่ดีสำหรับเว็บ Node.js + EJS พร้อม Tailwind CSS คุณสามารถปรับแต่งต่อยอดตามความต้องการได้  
