# Instrucțiuni de Rulare - Portfolio Neobrutalist

## ✅ Structura Finală (Corectă)

```
my-website/
├── client/              # Frontend (React + Vite + Tailwind v4)
│   ├── src/
│   ├── package.json     # Dependențe frontend
│   └── node_modules/
├── server/              # Backend (Express + Nodemailer)
│   ├── server.js
│   ├── package.json     # Dependențe backend
│   └── node_modules/
├── README.md
└── .gitignore
```

## 🚀 Pași de Instalare și Rulare

### Pas 1: Instalare Dependențe

**Terminal 1 - Client:**
```bash
cd client
npm install
```

**Terminal 2 - Server:**
```bash
cd server
npm install
```

### Pas 2: Configurare Email (Opțional)

Creează fișierul `server/.env`:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=5000
```

**Notă:** Fără configurare, serverul va funcționa în "mock mode".

### Pas 3: Pornire Aplicație

**Terminal 1 - Frontend:**
```bash
cd client
npm run dev
```
→ Accesează: `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd server
npm start
```
→ API disponibil pe: `http://localhost:5000`

## 🎨 Pagini Disponibile

- `/` - Pagina principală (Hero, About, Tech Stack, Experience, Projects, Contact)
- `/design-system` - UI Kit complet (toate componentele și culorile)

## 📦 Dependențe Separate

### Client (`client/package.json`)
- React 19
- TypeScript
- Vite
- Tailwind CSS v4 (configurare prin `@theme` în CSS)
- Framer Motion
- React Router
- Axios
- Lucide React

### Server (`server/package.json`)
- Express
- Nodemailer
- CORS
- Dotenv

## 🔧 Comenzi Utile

### Client
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Server
```bash
npm start        # Start server
npm run dev      # Start server (alias)
```

## 🎨 Design System

Toate culorile și stilurile sunt definite în `client/src/index.css` folosind Tailwind v4:

```css
@theme {
  --color-main: #F3F4F6;        /* Background */
  --color-surface: #FFFFFF;      /* Cards */
  --color-primary: #00FF41;      /* Matrix Green */
  --color-secondary: #121212;    /* Black */
  --color-accent: #8A2BE2;       /* Purple */
  --color-muted: #A3A3A3;        /* Grey */
  
  --shadow-neo: 4px 4px 0px 0px #121212;
  --font-sans: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

## ⚠️ Note Importante

1. **Nu există `tailwind.config.js`** - Tailwind v4 folosește `@theme` direct în CSS
2. **Fiecare folder (client/server) are propriul `package.json`** - Dependențe complet separate
3. **Node_modules** sunt separate pentru fiecare parte a aplicației
4. **Porturile**: Frontend (5173), Backend (5000)

