# Portfolio Website - Neobrutalism x Matrix

Un website personal de portofoliu construit cu React, Node.js și Express, având un design Neobrutalist combinat cu elemente Matrix.

## 📁 Structura Proiectului

```
my-website/
├── client/          # Frontend React + Vite
│   ├── src/
│   ├── package.json
│   └── ...
├── server/          # Backend Express
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Cum să rulezi proiectul

### Cerințe
- Node.js (v18 sau mai nou)
- npm

### 1. Instalare Dependențe

**Client (Frontend):**
```bash
cd client
npm install
```

**Server (Backend):**
```bash
cd server
npm install
```

### 2. Configurare Environment Variables (Opțional)

Pentru ca formularul de contact să funcționeze, creează un fișier `.env` în folderul `server/`:

```env
EMAIL_USER=adresa_ta@gmail.com
EMAIL_PASS=parola_aplicatie_gmail
PORT=5000
```

**Notă:** Dacă nu configurezi email-ul, serverul va funcționa în "mock mode" și va afișa mesajele în consolă.

### 3. Rulare

Ai nevoie de **două terminale**:

**Terminal 1 - Frontend:**
```bash
cd client
npm run dev
```
Accesează: `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd server
npm start
```
Rulează pe: `http://localhost:5000`

## 🎨 Design System

Vizitează `/design-system` pentru a vedea toate componentele UI și paleta de culori.

### Paleta de Culori
- **Main Background:** `#F3F4F6` (Off-White)
- **Primary:** `#00FF41` (Matrix Green)
- **Secondary:** `#121212` (Deep Black)
- **Accent:** `#8A2BE2` (Cyber Purple)

## 📦 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

### Backend
- Node.js
- Express
- Nodemailer
- CORS

## 📄 Licență

MIT

