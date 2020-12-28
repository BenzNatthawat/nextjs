## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

antdesign
nextjs
scss

## structure

```
nextjs
├───components         // ส่วนย่อยๆ ของ component
│   ├───component.js
│   └───...
├───layouts            // ส่วน layout ที่ใช้ร่วมกันหลายๆหน้า
│   ├───layout.js
│   └───...
├───pages              // ส่วนแต่ละหน้าของเว็บไซต์
│   ├───api            // api
│   │    ├───hello.js
│   │    └───...
│   ├───_app.js
│   ├───index.js
│   └───pathname*      // ชื่อ path ตรงกับชื่อโฟรเดอร์
│        ├───index.js
│        ├───[id].js
│        └───...
├───pubilc
│   └───...
└───styles
    └───index.css
```