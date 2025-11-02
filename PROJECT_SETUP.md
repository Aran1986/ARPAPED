# 🚀 ARPAPED - Project Setup Guide

راهنمای کامل راه‌اندازی پروژه جدید ARPAPED از صفر

---

## 📋 Prerequisites (پیش‌نیازها)

قبل از شروع، مطمئن شو این‌ها رو داری:

- [ ] Node.js 18+ نصب شده
- [ ] Git نصب شده
- [ ] VS Code یا editor دلخواه
- [ ] حساب GitHub
- [ ] حساب Vercel (برای deploy)
- [ ] حساب Supabase (برای database)

---

## 🎯 Step 1: Create Next.js Project

```bash
# Create new Next.js project
npx create-next-app@latest arpaped

# Options:
# ✅ TypeScript: Yes
# ✅ ESLint: Yes
# ✅ Tailwind CSS: Yes
# ✅ src/ directory: Yes
# ✅ App Router: Yes
# ❌ Turbopack: No (optional)
# ✅ Import alias (@/*): Yes

# Navigate to project
cd arpaped
```

---

## 🎯 Step 2: Install Dependencies

```bash
# UI & Styling
npm install clsx tailwind-merge class-variance-authority

# State Management
npm install zustand

# Authentication
npm install next-auth @next-auth/prisma-adapter
npm install @web3modal/wagmi wagmi viem

# Database
npm install @supabase/supabase-js

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Utils
npm install date-fns uuid

# Dev Dependencies
npm install -D @types/node @types/react @types/uuid
```

---

## 🎯 Step 3: Create Folder Structure

```bash
# در ویندوز Git Bash:

cd src

# Create main folders
mkdir -p modules shared core

# Create shared structure
mkdir -p shared/components/layout
mkdir -p shared/components/ui
mkdir -p shared/components/widgets
mkdir -p shared/hooks
mkdir -p shared/utils
mkdir -p shared/types
mkdir -p shared/styles

# Create core structure
mkdir -p core/auth
mkdir -p core/config
mkdir -p core/routing
mkdir -p core/state
mkdir -p core/api-client
mkdir -p core/events

# Create initial modules
mkdir -p modules/finance/wallet
mkdir -p modules/health/pharmacy
mkdir -p modules/social/messaging
mkdir -p modules/marketplace/shop
mkdir -p modules/education/courses
mkdir -p modules/entertainment/music
mkdir -p modules/travel/flight
mkdir -p modules/business/crm
mkdir -p modules/iot/smart-home
mkdir -p modules/ai/chat

echo "✅ Folder structure created!"
```

---

## 🎯 Step 4: Copy Essential Files

از پروژه قبلی این فایل‌ها رو کپی کن:

### 4.1 Documentation
```bash
# Copy to root
cp /path/to/old-project/KNOWLEDGE_TRANSFER.md ./
cp /path/to/old-project/ARCHITECTURE.md ./
cp /path/to/old-project/PROJECT_SETUP.md ./
```

### 4.2 Config Files
```bash
# .env.local
NEXT_PUBLIC_APP_NAME=ARPAPED
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Auth
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# WalletConnect
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-project-id
```

### 4.3 Tailwind Config
```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#a855f7',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
    },
  },
  plugins: [],
}
```

---

## 🎯 Step 5: Create Core Files

### 5.1 Global Store
```bash
# Create file
touch src/core/state/store.ts
```

```tsx
// src/core/state/store.ts
'use client';

import { create } from 'zustand';

export interface Tab {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

interface GlobalState {
  // Tabs
  tabs: Tab[];
  activeTabId: string | null;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  
  // User
  user: any | null;
  setUser: (user: any) => void;
  
  // Wallet
  wallet: any | null;
  setWallet: (wallet: any) => void;
}

export const useStore = create<GlobalState>((set) => ({
  // Tabs
  tabs: [],
  activeTabId: null,
  
  addTab: (tab) => set((state) => {
    // Check if tab already exists
    const exists = state.tabs.find(t => t.id === tab.id);
    if (exists) {
      return { activeTabId: tab.id };
    }
    return {
      tabs: [...state.tabs, tab],
      activeTabId: tab.id
    };
  }),
  
  removeTab: (id) => set((state) => {
    const newTabs = state.tabs.filter(t => t.id !== id);
    const newActiveId = newTabs[0]?.id || null;
    return {
      tabs: newTabs,
      activeTabId: newActiveId
    };
  }),
  
  setActiveTab: (id) => set({ activeTabId: id }),
  
  // User
  user: null,
  setUser: (user) => set({ user }),
  
  // Wallet
  wallet: null,
  setWallet: (wallet) => set({ wallet }),
}));
```

### 5.2 Auth Hook
```bash
touch src/shared/hooks/useAuth.ts
```

```tsx
// src/shared/hooks/useAuth.ts
'use client';

import { useStore } from '@/core/state/store';

export function useAuth() {
  const { user, setUser, wallet, setWallet } = useStore();
  
  const login = async (method: 'google' | 'wallet') => {
    // TODO: Implement login logic
    console.log('Login with:', method);
  };
  
  const logout = () => {
    setUser(null);
    setWallet(null);
  };
  
  return {
    user,
    wallet,
    isAuthenticated: !!user,
    login,
    logout,
  };
}
```

### 5.3 Tab Hook
```bash
touch src/shared/hooks/useTab.ts
```

```tsx
// src/shared/hooks/useTab.ts
'use client';

import { useStore } from '@/core/state/store';
import type { Tab } from '@/core/state/store';

export function useTab() {
  const { tabs, activeTabId, addTab, removeTab, setActiveTab } = useStore();
  
  const openTab = (id: string, title: string, icon: string, content: React.ReactNode) => {
    addTab({ id, title, icon, content });
  };
  
  const closeTab = (id: string) => {
    removeTab(id);
  };
  
  const switchTab = (id: string) => {
    setActiveTab(id);
  };
  
  return {
    tabs,
    activeTabId,
    openTab,
    closeTab,
    switchTab,
  };
}
```

---

## 🎯 Step 6: Create Layout Components

### 6.1 Header
```bash
mkdir -p src/shared/components/layout/Header
touch src/shared/components/layout/Header/Header.tsx
touch src/shared/components/layout/Header/Header.module.css
```

```tsx
// src/shared/components/layout/Header/Header.tsx
'use client';

import styles from './Header.module.css';
import { useAuth } from '@/shared/hooks/useAuth';

export default function Header() {
  const { user, login, logout } = useAuth();
  
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.logo}>ARPAPED</h1>
      </div>
      
      <div className={styles.center}>
        {/* Search or navigation */}
      </div>
      
      <div className={styles.right}>
        {user ? (
          <button onClick={logout} className={styles.btn}>
            خروج
          </button>
        ) : (
          <button onClick={() => login('google')} className={styles.btn}>
            ورود
          </button>
        )}
      </div>
    </header>
  );
}
```

```css
/* src/shared/components/layout/Header/Header.module.css */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6366f1;
}

.btn {
  padding: 0.5rem 1rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn:hover {
  background: #4f46e5;
}
```

### 6.2 Footer
```bash
mkdir -p src/shared/components/layout/Footer
touch src/shared/components/layout/Footer/Footer.tsx
touch src/shared/components/layout/Footer/Footer.module.css
```

```tsx
// src/shared/components/layout/Footer/Footer.tsx
'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <button className={styles.btn}>💬</button>
      </div>
      
      <div className={styles.center}>
        <input 
          type="text" 
          placeholder="پیام خود را بنویسید..."
          className={styles.input}
        />
        <button className={styles.sendBtn}>➤</button>
      </div>
      
      <div className={styles.right}>
        <button className={styles.btn}>🔹</button>
      </div>
    </footer>
  );
}
```

### 6.3 TabSystem
```bash
mkdir -p src/core/routing
touch src/core/routing/TabSystem.tsx
touch src/core/routing/TabSystem.module.css
```

```tsx
// src/core/routing/TabSystem.tsx
'use client';

import { useTab } from '@/shared/hooks/useTab';
import styles from './TabSystem.module.css';

export default function TabSystem() {
  const { tabs, activeTabId, closeTab, switchTab } = useTab();
  
  if (tabs.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>خوش آمدید به ARPAPED</h2>
        <p>برای شروع، روی یکی از آیکون‌ها کلیک کنید</p>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      {/* Tab Bar */}
      <div className={styles.tabBar}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`${styles.tab} ${activeTabId === tab.id ? styles.active : ''}`}
            onClick={() => switchTab(tab.id)}
          >
            <span className={styles.icon}>{tab.icon}</span>
            <span className={styles.title}>{tab.title}</span>
            <button
              className={styles.closeBtn}
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className={styles.content}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={styles.tabContent}
            style={{ display: activeTabId === tab.id ? 'block' : 'none' }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 🎯 Step 7: Create Main Layout

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ARPAPED - Super App',
  description: 'Modular Web3 Super App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// src/app/page.tsx
'use client';

import Header from '@/shared/components/layout/Header/Header';
import Footer from '@/shared/components/layout/Footer/Footer';
import TabSystem from '@/core/routing/TabSystem';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <TabSystem />
      </main>
      
      <Footer />
    </div>
  );
}
```

```css
/* src/app/page.module.css */
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
}

.main {
  overflow: hidden;
}
```

---

## 🎯 Step 8: Git Setup

```bash
# Initialize git
git init

# Create .gitignore
cat > .gitignore << EOF
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF

# First commit
git add .
git commit -m "Initial commit: ARPAPED project structure"

# Create GitHub repo and push
git branch -M main
git remote add origin https://github.com/Aran1986/ARPAPED.git
git push -u origin main
```

---

## 🎯 Step 9: Test Run

```bash
# Start development server
npm run dev

# Open browser
# http://localhost:3000

# Check:
# ✅ Header displays
# ✅ Footer displays
# ✅ Empty state shows
# ✅ No console errors
```

---

## 🎯 Step 10: Create First Module

الان که پروژه آماده است، اولین ماژول رو بساز:

```bash
# Create module structure
mkdir -p src/modules/finance/wallet/components
mkdir -p src/modules/finance/wallet/services
mkdir -p src/modules/finance/wallet/hooks
mkdir -p src/modules/finance/wallet/store
mkdir -p src/modules/finance/wallet/types
```

```tsx
// src/modules/finance/wallet/components/WalletModule.tsx
'use client';

export default function WalletModule() {
  return (
    <div>
      <h1>💰 کیف پول</h1>
      <p>ماژول کیف پول در حال توسعه است...</p>
    </div>
  );
}
```

```tsx
// src/modules/finance/wallet/index.ts
export { default as WalletModule } from './components/WalletModule';
```

### Test Module Integration

```tsx
// در Footer.tsx دکمه اضافه کن:
import { useTab } from '@/shared/hooks/useTab';
import { WalletModule } from '@/modules/finance/wallet';

export default function Footer() {
  const { openTab } = useTab();
  
  return (
    <footer>
      {/* ... */}
      <button onClick={() => openTab('wallet', 'کیف پول', '💰', <WalletModule />)}>
        💰
      </button>
    </footer>
  );
}
```

---

## ✅ Verification Checklist

پروژه آماده است اگر:

- [ ] `npm run dev` بدون error اجرا میشه
- [ ] صفحه اصلی نمایش داده میشه
- [ ] Header و Footer نمایش داده میشه
- [ ] دکمه‌ها tab جدید باز می‌کنن
- [ ] Tab ها بسته میشن
- [ ] Console بدون error هست
- [ ] TypeScript errors نداریم
- [ ] Git push موفق بوده

---

## 🎯 Next Steps

حالا آماده‌ای برای:

1. ✅ اضافه کردن Auth System
2. ✅ اضافه کردن ماژول‌های بیشتر
3. ✅ اتصال به Supabase
4. ✅ پیاده‌سازی Wallet Connect

به [KNOWLEDGE_TRANSFER.md](./KNOWLEDGE_TRANSFER.md) برای جزئیات بیشتر مراجعه کن!

---

## 🆘 Troubleshooting

### Problem: npm install fails
```bash
# Solution
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Problem: Port 3000 in use
```bash
# Solution
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Problem: TypeScript errors
```bash
# Solution
# Delete and regenerate
rm -rf .next
npm run dev
```

---

**🎉 تبریک! پروژه ARPAPED آماده است!**
