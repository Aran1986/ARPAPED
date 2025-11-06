# 📁 دستورالعمل استفاده از فایل‌های Fixed

## ✅ همه فایل‌ها آماده است - تمام آدرس‌ها به ROOT تغییر کرده

---

## 📋 لیست کامل 36 فایل (همه در ROOT):

### Config Files (8):
1. `.gitignore`
2. `package.json`
3. `package-lock.json`
4. `tsconfig.json`
5. `next.config.js`
6. `postcss.config.js`
7. `tailwind.config.js`
8. `next-env.d.ts`

### Documentation (5):
9. `README.md`
10. `ARCHITECTURE.md`
11. `KNOWLEDGE_TRANSFER.md`
12. `PROJECT_SETUP.md`
13. `GIT_COMMANDS.md`

### App Core (4):
14. `layout.tsx`
15. `page.tsx`
16. `page.module.css`
17. `globals.css`

### Landing:
18. `index.html`

### Core System (3):
19. `store.ts`
20. `TabSystem.tsx`
21. `TabSystem.module.css`

### Hooks (2):
22. `useAuth.ts`
23. `useTab.ts`

### Layout - Header (2):
24. `Header.tsx`
25. `Header.module.css`

### Layout - Footer (2):
26. `Footer.tsx`
27. `Footer.module.css`

### Layout - LeftSidebar (2):
28. `LeftSidebar.tsx`
29. `LeftSidebar.module.css`

### Layout - RightSidebar (2):
30. `RightSidebar.tsx`
31. `RightSidebar.module.css`

### Auth - Login (2):
32. `LoginModule.tsx`
33. `LoginModule.module.css`

### Auth - Signup (2):
34. `SignupModule.tsx`
35. `SignupModule.module.css`

### Auth - Index:
36. `index.ts`

---

## 🔧 دستورات Windows CMD برای کپی فایل‌ها:

### مرحله 1: پاک کردن فولدر src (اگر وجود داره)
```cmd
cd C:\Users\aran\Desktop\ARPAPED
rmdir /S /Q src
```

### مرحله 2: انتقال همه فایل‌ها از Downloads به ROOT پروژه
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: Config files
move /Y "C:\Users\aran\Downloads\.gitignore" ".gitignore"
move /Y "C:\Users\aran\Downloads\package.json" "package.json"
move /Y "C:\Users\aran\Downloads\package-lock.json" "package-lock.json"
move /Y "C:\Users\aran\Downloads\tsconfig.json" "tsconfig.json"
move /Y "C:\Users\aran\Downloads\next.config.js" "next.config.js"
move /Y "C:\Users\aran\Downloads\postcss.config.js" "postcss.config.js"
move /Y "C:\Users\aran\Downloads\tailwind.config.js" "tailwind.config.js"
move /Y "C:\Users\aran\Downloads\next-env.d.ts" "next-env.d.ts"

:: Documentation
move /Y "C:\Users\aran\Downloads\README.md" "README.md"
move /Y "C:\Users\aran\Downloads\ARCHITECTURE.md" "ARCHITECTURE.md"
move /Y "C:\Users\aran\Downloads\KNOWLEDGE_TRANSFER.md" "KNOWLEDGE_TRANSFER.md"
move /Y "C:\Users\aran\Downloads\PROJECT_SETUP.md" "PROJECT_SETUP.md"
move /Y "C:\Users\aran\Downloads\GIT_COMMANDS.md" "GIT_COMMANDS.md"

:: App files
move /Y "C:\Users\aran\Downloads\layout.tsx" "layout.tsx"
move /Y "C:\Users\aran\Downloads\page.tsx" "page.tsx"
move /Y "C:\Users\aran\Downloads\page.module.css" "page.module.css"
move /Y "C:\Users\aran\Downloads\globals.css" "globals.css"
move /Y "C:\Users\aran\Downloads\index.html" "index.html"

:: Core system
move /Y "C:\Users\aran\Downloads\store.ts" "store.ts"
move /Y "C:\Users\aran\Downloads\TabSystem.tsx" "TabSystem.tsx"
move /Y "C:\Users\aran\Downloads\TabSystem.module.css" "TabSystem.module.css"

:: Hooks
move /Y "C:\Users\aran\Downloads\useAuth.ts" "useAuth.ts"
move /Y "C:\Users\aran\Downloads\useTab.ts" "useTab.ts"

:: Header
move /Y "C:\Users\aran\Downloads\Header.tsx" "Header.tsx"
move /Y "C:\Users\aran\Downloads\Header.module.css" "Header.module.css"

:: Footer
move /Y "C:\Users\aran\Downloads\Footer.tsx" "Footer.tsx"
move /Y "C:\Users\aran\Downloads\Footer.module.css" "Footer.module.css"

:: LeftSidebar
move /Y "C:\Users\aran\Downloads\LeftSidebar.tsx" "LeftSidebar.tsx"
move /Y "C:\Users\aran\Downloads\LeftSidebar.module.css" "LeftSidebar.module.css"

:: RightSidebar
move /Y "C:\Users\aran\Downloads\RightSidebar.tsx" "RightSidebar.tsx"
move /Y "C:\Users\aran\Downloads\RightSidebar.module.css" "RightSidebar.module.css"

:: Auth - Login
move /Y "C:\Users\aran\Downloads\LoginModule.tsx" "LoginModule.tsx"
move /Y "C:\Users\aran\Downloads\LoginModule.module.css" "LoginModule.module.css"

:: Auth - Signup  
move /Y "C:\Users\aran\Downloads\SignupModule.tsx" "SignupModule.tsx"
move /Y "C:\Users\aran\Downloads\SignupModule.module.css" "SignupModule.module.css"

:: Auth - Index
move /Y "C:\Users\aran\Downloads\index.ts" "index.ts"
```

### مرحله 3: Git add, commit, push
```cmd
cd C:\Users\aran\Desktop\ARPAPED

git add .
git commit -m "refactor: move all files to root - remove src folder structure"
git push origin main
```

### مرحله 4: نصب dependencies و اجرا
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: پاک کردن node_modules و نصب مجدد
rmdir /S /Q node_modules
del package-lock.json
npm install

:: اجرای پروژه
npm run dev
```

---

## ⚠️ نکات مهم:

1. **همه فایل‌ها در ROOT هستن** - دیگه فولدر `src/` نداریم
2. **تمام import ها تغییر کردن** - همه به `./filename` تغییر کردن
3. **CSS Modules** همچنان کار می‌کنن - `import styles from './Component.module.css'`
4. **tsconfig.json** تغییر نکرده - همچنان `@/*` رو support می‌کنه ولی فعلاً ازش استفاده نمی‌کنیم

---

## 📝 تغییرات Import ها:

### قبل (با فولدر):
```tsx
import { useTab } from '@/shared/hooks/useTab';
import { useAuth } from '@/shared/hooks/useAuth';
import { useStore } from '@/core/state/store';
import Header from '@/shared/components/layout/Header/Header';
```

### بعد (ROOT):
```tsx
import { useTab } from './useTab';
import { useAuth } from './useAuth';
import { useStore } from './store';
import Header from './Header';
```

---

## ✅ بعد از اجرای دستورات بالا:

1. تمام فایل‌ها در ROOT پروژه هستن
2. هیچ فولدر `src/` وجود نداره
3. Next.js از روت فایل‌ها رو می‌خونه
4. پروژه باید بدون error اجرا بشه

---

## 🎯 اگر خطا داد:

```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: پاکسازی کامل
rmdir /S /Q .next
rmdir /S /Q node_modules
del package-lock.json

:: نصب و اجرا
npm install
npm run dev
```

---

**✅ تمام! حالا همه چیز توی ROOT هست!**
