# 🔧 Git Bash Commands - ARPAPED Project

تمام دستورات Git Bash (CMD) برای مدیریت پروژه ARPAPED در ویندوز

**⚠️ توجه: تمام دستورات برای Command Prompt (CMD) ویندوز است**

---

## 📍 مسیرهای پروژه

```cmd
پوشه پروژه: C:\Users\aran\Desktop\ARPAPED
پوشه Downloads: C:\Users\aran\Downloads
```

---

## 📦 انتقال فایل از Downloads به پروژه

### Template استاندارد
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\filename.ext" "destination\path\filename.ext"
git add .
git commit -m "your commit message"
git push origin main
npm run dev
```

### مثال 1: انتقال یک فایل Component
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\WalletModule.tsx" "src\modules\finance\wallet\components\WalletModule.tsx"
git add .
git commit -m "feat: add wallet module component"
git push origin main
npm run dev
```

### مثال 2: انتقال فایل‌های Documentation
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\KNOWLEDGE_TRANSFER.md" "KNOWLEDGE_TRANSFER.md"
move /Y "C:\Users\aran\Downloads\ARCHITECTURE.md" "ARCHITECTURE.md"
move /Y "C:\Users\aran\Downloads\PROJECT_SETUP.md" "PROJECT_SETUP.md"
git add .
git commit -m "docs: add project documentation"
git push origin main
```

### مثال 3: انتقال چند فایل Core
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\store.ts" "src\core\state\store.ts"
move /Y "C:\Users\aran\Downloads\useAuth.ts" "src\shared\hooks\useAuth.ts"
move /Y "C:\Users\aran\Downloads\useTab.ts" "src\shared\hooks\useTab.ts"
git add .
git commit -m "feat: add core state management and hooks"
git push origin main
npm run dev
```

### مثال 4: انتقال Layout Components
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\Header.tsx" "src\shared\components\layout\Header\Header.tsx"
move /Y "C:\Users\aran\Downloads\Header.module.css" "src\shared\components\layout\Header\Header.module.css"
move /Y "C:\Users\aran\Downloads\Footer.tsx" "src\shared\components\layout\Footer\Footer.tsx"
move /Y "C:\Users\aran\Downloads\Footer.module.css" "src\shared\components\layout\Footer\Footer.module.css"
git add .
git commit -m "feat: add header and footer components"
git push origin main
npm run dev
```

### مثال 5: انتقال Tab System
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\TabSystem.tsx" "src\core\routing\TabSystem.tsx"
move /Y "C:\Users\aran\Downloads\TabSystem.module.css" "src\core\routing\TabSystem.module.css"
git add .
git commit -m "feat: implement tab system for modular navigation"
git push origin main
npm run dev
```

### مثال 6: انتقال یک ماژول کامل
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\PharmacyModule.tsx" "src\modules\health\pharmacy\components\PharmacyModule.tsx"
move /Y "C:\Users\aran\Downloads\PharmacyModule.module.css" "src\modules\health\pharmacy\styles\PharmacyModule.module.css"
move /Y "C:\Users\aran\Downloads\pharmacyAPI.ts" "src\modules\health\pharmacy\services\pharmacyAPI.ts"
move /Y "C:\Users\aran\Downloads\usePharmacy.ts" "src\modules\health\pharmacy\hooks\usePharmacy.ts"
git add .
git commit -m "feat: add pharmacy module with search and ordering"
git push origin main
npm run dev
```

---

## 🗂️ مشاهده ساختار پروژه

### دستورات CMD
```cmd
:: رفتن به پوشه پروژه
cd C:\Users\aran\Desktop\ARPAPED

:: مشاهده ساختار کامل با tree
tree /F /A

:: ذخیره در فایل
tree /F /A > project-structure.txt

:: باز کردن در Notepad
notepad project-structure.txt

:: لیست تمام فایل‌ها
dir /S /B > all-files.txt

:: لیست فقط پوشه‌ها
dir /S /B /AD > folders.txt

:: لیست فایل‌های TypeScript
dir /S /B *.tsx *.ts > typescript-files.txt

:: لیست فایل‌های CSS
dir /S /B *.css > css-files.txt
```

---

## 📂 ساخت ساختار پوشه‌ها

### رفتن به پوشه src
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src
```

### ساخت پوشه‌های اصلی
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src
mkdir modules
mkdir shared
mkdir core
```

### ساخت ساختار shared
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src\shared
mkdir components
mkdir hooks
mkdir utils
mkdir types
mkdir styles

cd components
mkdir layout
mkdir ui
mkdir widgets

cd layout
mkdir Header
mkdir Footer
mkdir LeftSidebar
mkdir RightSidebar
```

### ساخت ساختار core
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src\core
mkdir auth
mkdir config
mkdir routing
mkdir state
mkdir api-client
mkdir events
```

### ساخت ماژول Finance
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src\modules
mkdir finance
cd finance
mkdir wallet
mkdir exchange
mkdir banking

cd wallet
mkdir components
mkdir services
mkdir hooks
mkdir store
mkdir types
mkdir styles
```

### ساخت ماژول Health
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src\modules
mkdir health
cd health
mkdir pharmacy
mkdir telemedicine
mkdir medical-records
mkdir fitness

cd pharmacy
mkdir components
mkdir services
mkdir hooks
mkdir store
mkdir types
mkdir styles
```

### ساخت سایر ماژول‌ها
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src\modules

:: Social Module
mkdir social
cd social
mkdir messaging
mkdir video-call
mkdir communities
cd ..

:: Marketplace Module
mkdir marketplace
cd marketplace
mkdir shop
mkdir nft
cd ..

:: Education Module
mkdir education
cd education
mkdir courses
cd ..

:: Entertainment Module
mkdir entertainment
cd entertainment
mkdir music
mkdir video
mkdir games
cd ..

:: Travel Module
mkdir travel
cd travel
mkdir flight
mkdir hotel
cd ..

:: Business Module
mkdir business
cd business
mkdir crm
mkdir invoicing
cd ..

:: IoT Module
mkdir iot
cd iot
mkdir smart-home
mkdir car
cd ..

:: AI Module
mkdir ai
cd ai
mkdir chat
mkdir image-gen
cd ..
```

### ساخت یکجای تمام ساختار (یک دستور)
```cmd
cd C:\Users\aran\Desktop\ARPAPED\src && ^
mkdir modules shared core && ^
cd shared && mkdir components hooks utils types styles && ^
cd components && mkdir layout ui widgets && ^
cd layout && mkdir Header Footer LeftSidebar RightSidebar && ^
cd ..\..\.. && cd core && mkdir auth config routing state api-client events && ^
cd .. && cd modules && ^
mkdir finance health social marketplace education entertainment travel business iot ai
```

---

## 🔄 دستورات Git (در CMD)

### راه‌اندازی اولیه
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: ایجاد repository
git init

:: اضافه کردن remote
git remote add origin https://github.com/Aran1986/ARPAPED.git

:: بررسی remote
git remote -v
```

### عملیات روزمره

#### ✅ Add & Commit & Push (یک دستور کامل)
```cmd
cd C:\Users\aran\Desktop\ARPAPED
git add .
git commit -m "feat: add new feature"
git push origin main
npm run dev
```

#### ✅ Add فایل خاص
```cmd
cd C:\Users\aran\Desktop\ARPAPED
git add src\modules\finance\wallet\WalletModule.tsx
git commit -m "feat: add wallet module"
git push origin main
```

#### ✅ Add چند فایل
```cmd
cd C:\Users\aran\Desktop\ARPAPED
git add src\app\page.tsx
git add src\app\layout.tsx
git add src\app\globals.css
git commit -m "feat: update app structure"
git push origin main
npm run dev
```

#### 📤 Push
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: Push به main
git push origin main

:: Push اولین بار (set upstream)
git push -u origin main

:: Force push (احتیاط!)
git push -f origin main
```

#### 📥 Pull
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: دریافت آخرین تغییرات
git pull origin main

:: Pull + Rebase
git pull --rebase origin main
```

#### 🔍 Status & Log
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: وضعیت فعلی
git status

:: تاریخچه کامیت‌ها
git log

:: تاریخچه خلاصه
git log --oneline

:: تاریخچه با نمودار
git log --graph --oneline --all
```

---

## 🌿 کار با Branch

### ساخت و مدیریت Branch
```bash
# لیست branch ها
git branch

# ساخت branch جدید
git branch feature/pharmacy-module

# رفتن به branch
git checkout feature/pharmacy-module

# ساخت + رفتن به branch (shorthand)
git checkout -b feature/pharmacy-module

# حذف branch
git branch -d feature/pharmacy-module

# حذف اجباری
git branch -D feature/pharmacy-module
```

### Merge
```bash
# برگشت به main
git checkout main

# merge کردن feature
git merge feature/pharmacy-module
```

---

## 🔧 دستورات مفید دیگر

### پاکسازی
```bash
# حذف فایل‌های tracked نشده
git clean -fd

# نمایش آنچه حذف می‌شود (بدون حذف)
git clean -fd --dry-run

# Reset کردن تمام تغییرات
git reset --hard HEAD

# Reset به کامیت خاص
git reset --hard abc123
```

### Stash
```bash
# ذخیره موقت تغییرات
git stash

# نمایش stash ها
git stash list

# بازگردانی آخرین stash
git stash pop

# بازگردانی stash خاص
git stash apply stash@{0}

# حذف stash
git stash drop stash@{0}
```

### تغییر نام / جابجایی
```bash
# تغییر نام فایل (با Git)
git mv old-name.tsx new-name.tsx

# جابجایی فایل
git mv src/components/Old.tsx src/modules/new/Old.tsx
```

---

## 📋 Conventional Commits

استفاده از commit message های استاندارد:

```bash
# Feature جدید
git commit -m "feat: add pharmacy module with drug search"

# Bug fix
git commit -m "fix: resolve tab closing issue"

# Documentation
git commit -m "docs: update ARCHITECTURE.md with new rules"

# Styling
git commit -m "style: format code with prettier"

# Refactor
git commit -m "refactor: restructure health module"

# Performance
git commit -m "perf: optimize tab switching"

# Test
git commit -m "test: add wallet module tests"

# Build/Config
git commit -m "build: update dependencies"

# Chore
git commit -m "chore: clean up unused files"
```

---

## 🚀 Workflows (گردش کار کامل)

### 🔥 Workflow اصلی: دریافت فایل از AI و اضافه به پروژه

این مهم‌ترین workflow است که همیشه استفاده می‌کنی:

```cmd
:: 1. رفتن به پوشه پروژه
cd C:\Users\aran\Desktop\ARPAPED

:: 2. انتقال فایل از Downloads
move /Y "C:\Users\aran\Downloads\YourFile.tsx" "src\path\to\YourFile.tsx"

:: 3. Add, Commit, Push
git add .
git commit -m "feat: add your feature description"
git push origin main

:: 4. اجرای پروژه
npm run dev
```

### Workflow 1: اضافه کردن Component جدید
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\PharmacyModule.tsx" "src\modules\health\pharmacy\components\PharmacyModule.tsx"
move /Y "C:\Users\aran\Downloads\PharmacyModule.module.css" "src\modules\health\pharmacy\styles\PharmacyModule.module.css"
git add .
git commit -m "feat: add pharmacy module with drug search functionality"
git push origin main
npm run dev
```

### Workflow 2: آپدیت Layout Components
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\Header.tsx" "src\shared\components\layout\Header\Header.tsx"
move /Y "C:\Users\aran\Downloads\Footer.tsx" "src\shared\components\layout\Footer\Footer.tsx"
git add .
git commit -m "fix: update header and footer components"
git push origin main
npm run dev
```

### Workflow 3: اضافه کردن Core Files
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\store.ts" "src\core\state\store.ts"
move /Y "C:\Users\aran\Downloads\useAuth.ts" "src\shared\hooks\useAuth.ts"
move /Y "C:\Users\aran\Downloads\TabSystem.tsx" "src\core\routing\TabSystem.tsx"
git add .
git commit -m "feat: implement core state management and tab system"
git push origin main
npm run dev
```

### Workflow 4: آپدیت چند فایل مرتبط
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\page.tsx" "src\app\page.tsx"
move /Y "C:\Users\aran\Downloads\layout.tsx" "src\app\layout.tsx"
move /Y "C:\Users\aran\Downloads\globals.css" "src\app\globals.css"
git add .
git commit -m "fix: restore all features with tabs system - complete redesign"
git push origin main
npm run dev
```

### Workflow 5: اضافه کردن ماژول کامل با تمام فایل‌ها
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: Component
move /Y "C:\Users\aran\Downloads\WalletModule.tsx" "src\modules\finance\wallet\components\WalletModule.tsx"

:: CSS
move /Y "C:\Users\aran\Downloads\WalletModule.module.css" "src\modules\finance\wallet\styles\WalletModule.module.css"

:: Service
move /Y "C:\Users\aran\Downloads\walletAPI.ts" "src\modules\finance\wallet\services\walletAPI.ts"

:: Hook
move /Y "C:\Users\aran\Downloads\useWallet.ts" "src\modules\finance\wallet\hooks\useWallet.ts"

:: Store
move /Y "C:\Users\aran\Downloads\useWalletStore.ts" "src\modules\finance\wallet\store\useWalletStore.ts"

:: Types
move /Y "C:\Users\aran\Downloads\types.ts" "src\modules\finance\wallet\types\index.ts"

:: Index
move /Y "C:\Users\aran\Downloads\index.ts" "src\modules\finance\wallet\index.ts"

:: Commit
git add .
git commit -m "feat: add complete wallet module with all features"
git push origin main
npm run dev
```

### Workflow 6: Fix سریع برای Bug
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\FixedComponent.tsx" "src\path\to\FixedComponent.tsx"
git add .
git commit -m "fix: resolve tab closing issue"
git push origin main
npm run dev
```

### Workflow 7: اضافه کردن Documentation
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\README.md" "src\modules\health\pharmacy\README.md"
git add .
git commit -m "docs: add pharmacy module documentation"
git push origin main
```

### Workflow 8: آپدیت Config Files
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\tailwind.config.js" "tailwind.config.js"
move /Y "C:\Users\aran\Downloads\next.config.js" "next.config.js"
git add .
git commit -m "chore: update configuration files"
git push origin main
npm run dev
```

---

## 🔧 دستورات npm

```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: نصب همه dependencies
npm install

:: نصب پکیج خاص
npm install zustand

:: نصب dev dependency
npm install -D @types/node

:: Development mode (اجرای پروژه)
npm run dev

:: Build برای production
npm run build

:: اجرای production build
npm start

:: Linting
npm run lint

:: Type checking
npx tsc --noEmit

:: حذف node_modules و نصب مجدد
rmdir /S /Q node_modules
del package-lock.json
npm install

:: پاکسازی cache
npm cache clean --force
```

---

## 🗑️ دستورات حذف و پاکسازی

### حذف فایل با Git
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: حذف فایل
git rm src\old-file.tsx
git commit -m "chore: remove old file"
git push origin main

:: حذف پوشه
git rm -r src\old-folder
git commit -m "chore: remove old folder"
git push origin main

:: حذف فایل از Git ولی نگهداری در local
git rm --cached filename.txt
git commit -m "chore: untrack file"
git push origin main
```

### پاکسازی پروژه
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: حذف node_modules
rmdir /S /Q node_modules

:: حذف .next
rmdir /S /Q .next

:: حذف dist یا build
rmdir /S /Q dist
rmdir /S /Q build

:: پاکسازی کامل و نصب مجدد
rmdir /S /Q node_modules
del package-lock.json
npm cache clean --force
npm install
```

---

## 📊 دستورات بررسی

### مشاهده تغییرات
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: تفاوت فایل‌های تغییر یافته
git diff

:: تفاوت یک فایل خاص
git diff src\app\page.tsx

:: لیست فایل‌های تغییر یافته
git status

:: آخرین تغییرات
git log -1
```

### بررسی حجم پروژه
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: حجم کل پروژه
dir /S

:: تعداد فایل‌ها
dir /S /B | find /C /V ""

:: لیست بزرگترین فایل‌ها
forfiles /S
---

## 💎 نکات طلایی

1. **همیشه قبل از شروع کار:** `git pull origin main`
2. **بعد از هر تغییر:** `git add . && git commit -m "message" && git push origin main`
3. **برای تست:** `npm run dev`
4. **اگر خطا داد:** `rmdir /S /Q .next && npm run dev`

---

**🎯 این فایل را Bookmark کن - روزانه بهش نیاز داری!**

les/$module_path/store"
  mkdir -p "src/modules/$module_path/types"
  mkdir -p "src/modules/$module_path/styles"
  touch "src/modules/$module_path/index.ts"
  echo "✅ Module created: $module_path"
}

# استفاده:
create_module "health/nutrition"
```

### بررسی ساختار ماژول‌ها
```bash
# لیست تمام ماژول‌ها
ls -la src/modules/

# بررسی یک ماژول خاص
tree src/modules/health/pharmacy/

# شمارش تعداد ماژول‌ها
find src/modules/ -type d -depth 2 | wc -l
```

---

## 🆘 حل مشکلات رایج

### مشکل: "Permission denied"
```bash
# راه حل:
chmod +x filename.sh
```

### مشکل: "fatal: not a git repository"
```bash
# راه حل:
git init
```

### مشکل: "Your branch is ahead of 'origin/main'"
```bash
# راه حل:
git push origin main
```

### مشکل: Merge conflict
```bash
# 1. مشاهده فایل‌های conflict
git status

# 2. ویرایش و حل conflict

# 3. Mark as resolved
git add .
git commit -m "resolve merge conflicts"
```

### مشکل: اشتباهی commit کردم
```bash
# راه حل 1: تغییر آخرین commit
git commit --amend -m "new message"

# راه حل 2: برگشت به قبل از commit
git reset HEAD~1
```

---

## 📝 یادداشت‌های مهم

### 🔴 دستورات خطرناک (با احتیاط!)
```bash
git reset --hard HEAD  # حذف همه تغییرات!
git push -f            # force push - می‌تونه تاریخچه رو خراب کنه
git clean -fd          # حذف فایل‌های tracked نشده
rm -rf /               # NEVER DO THIS!
```

### 🟢 دستورات امن
```bash
git status             # همیشه امن
git log                # همیشه امن
git diff               # همیشه امن
git branch             # همیشه امن
```

---

## 🎓 چک‌لیست روزانه

### هر بار که شروع به کار می‌کنی:
```cmd
cd C:\Users\aran\Desktop\ARPAPED
git pull origin main
git status
npm run dev
```

### هر بار که فایل جدید از AI می‌گیری:
```cmd
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\YourFile.tsx" "src\path\to\YourFile.tsx"
git add .
git commit -m "feat: your description"
git push origin main
npm run dev
```

### قبل از تمام کردن کار روزانه:
```cmd
cd C:\Users\aran\Desktop\ARPAPED
git status
git add .
git commit -m "chore: end of day commit"
git push origin main
```

---

## 🎯 دستورات خاص پروژه ARPAPED

### 🔥 Template کامل برای اضافه کردن ماژول جدید

این template را برای هر ماژول جدید استفاده کن:

```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: ساخت ساختار ماژول
cd src\modules
mkdir {module-name}
cd {module-name}
mkdir components services hooks store types styles

:: انتقال فایل‌های دریافتی از AI
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\{Module}Module.tsx" "src\modules\{module-name}\components\{Module}Module.tsx"
move /Y "C:\Users\aran\Downloads\{Module}Module.module.css" "src\modules\{module-name}\styles\{Module}Module.module.css"
move /Y "C:\Users\aran\Downloads\{module}API.ts" "src\modules\{module-name}\services\{module}API.ts"
move /Y "C:\Users\aran\Downloads\use{Module}.ts" "src\modules\{module-name}\hooks\use{Module}.ts"
move /Y "C:\Users\aran\Downloads\index.ts" "src\modules\{module-name}\index.ts"

:: Commit
git add .
git commit -m "feat: add {module-name} module"
git push origin main
npm run dev
```

### مثال واقعی: اضافه کردن Pharmacy Module
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: ساخت ساختار (فقط بار اول)
cd src\modules\health
mkdir pharmacy
cd pharmacy
mkdir components services hooks store types styles

:: انتقال فایل‌ها
cd C:\Users\aran\Desktop\ARPAPED
move /Y "C:\Users\aran\Downloads\PharmacyModule.tsx" "src\modules\health\pharmacy\components\PharmacyModule.tsx"
move /Y "C:\Users\aran\Downloads\PharmacyModule.module.css" "src\modules\health\pharmacy\styles\PharmacyModule.module.css"
move /Y "C:\Users\aran\Downloads\pharmacyAPI.ts" "src\modules\health\pharmacy\services\pharmacyAPI.ts"
move /Y "C:\Users\aran\Downloads\usePharmacy.ts" "src\modules\health\pharmacy\hooks\usePharmacy.ts"
move /Y "C:\Users\aran\Downloads\usePharmacyStore.ts" "src\modules\health\pharmacy\store\usePharmacyStore.ts"
move /Y "C:\Users\aran\Downloads\types.ts" "src\modules\health\pharmacy\types\index.ts"
move /Y "C:\Users\aran\Downloads\index.ts" "src\modules\health\pharmacy\index.ts"

:: Commit
git add .
git commit -m "feat: add pharmacy module with drug search and ordering"
git push origin main
npm run dev
```

---

## 🆘 حل مشکلات رایج

### مشکل: Port 3000 in use
```cmd
:: پیدا کردن process
netstat -ano | findstr :3000

:: Kill کردن process (با PID که پیدا کردی)
taskkill /PID {PID_NUMBER} /F

:: یا استفاده از port دیگر
npm run dev -- -p 3001
```

### مشکل: Git conflict
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: مشاهده فایل‌های conflict
git status

:: بعد از حل conflict:
git add .
git commit -m "resolve: merge conflicts"
git push origin main
```

### مشکل: اشتباهی commit کردم
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: تغییر آخرین commit message
git commit --amend -m "new correct message"
git push -f origin main

:: برگشت به قبل از commit (ولی نگه داشتن تغییرات)
git reset HEAD~1
```

### مشکل: npm install خطا می‌ده
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: پاکسازی و نصب مجدد
rmdir /S /Q node_modules
del package-lock.json
npm cache clean --force
npm install
```

### مشکل: TypeScript errors
```cmd
cd C:\Users\aran\Desktop\ARPAPED

:: پاکسازی build
rmdir /S /Q .next

:: اجرای مجدد
npm run dev
```

---

## 📝 Conventional Commits (پیام‌های استاندارد)

```cmd
:: Feature جدید
git commit -m "feat: add pharmacy module with drug search"

:: Bug fix
git commit -m "fix: resolve tab closing issue"

:: Documentation
git commit -m "docs: update ARCHITECTURE.md"

:: Style/UI changes
git commit -m "style: update button styling"

:: Refactor
git commit -m "refactor: restructure health module"

:: Performance
git commit -m "perf: optimize tab switching"

:: Test
git commit -m "test: add pharmacy tests"

:: Build/Config
git commit -m "build: update dependencies"

:: Chore
git commit -m "chore: clean up unused files"
```

---

## ✅ Quick Reference (مرجع سریع)

### دستورات پرکاربرد (کپی-پیست آماده!)

#### 1️⃣ دریافت و اضافه کردن یک Component
```cmd
cd C:\Users\aran\Desktop\ARPAPED && move /Y "C:\Users\aran\Downloads\Component.tsx" "src\path\to\Component.tsx" && git add . && git commit -m "feat: add component" && git push origin main && npm run dev
```

#### 2️⃣ آپدیت فایل‌های اصلی
```cmd
cd C:\Users\aran\Desktop\ARPAPED && move /Y "C:\Users\aran\Downloads\page.tsx" "src\app\page.tsx" && move /Y "C:\Users\aran\Downloads\layout.tsx" "src\app\layout.tsx" && git add . && git commit -m "fix: update app files" && git push origin main && npm run dev
```

#### 3️⃣ اضافه کردن Documentation
```cmd
cd C:\Users\aran\Desktop\ARPAPED && move /Y "C:\Users\aran\Downloads\README.md" "README.md" && git add . && git commit -m "docs: add documentation" && git push origin main
```

#### 4️⃣ Start سریع پروژه
```cmd
cd C:\Users\aran\Desktop\ARPAPED && npm run dev
```

#### 5️⃣ Status Check
```cmd
cd C:\Users\aran\Desktop\ARPAPED && git status
```

---

## 🎉 تمام!

**این فایل را bookmark کن - همیشه بهش نیاز داری! 🔖**

برای هر سوال یا مشکل، به [KNOWLEDGE_TRANSFER.md](./KNOWLEDGE_TRANSFER.md) مراجعه کن.

---

**💡 نکته طلایی:** همیشه بعد از هر تغییر:
```cmd
git add . && git commit -m "your message" && git push origin main && npm run dev
```
