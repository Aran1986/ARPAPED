# 📚 KNOWLEDGE TRANSFER - انتقال دانش به پروژه ARPAPED

این فایل شامل **تمام دانش معماری، تصمیمات، و یادگیری‌های** این پروژه است.

---

## 🎯 هدف پروژه ARPAPED

یک **سوپر اپ ماژولار مبتنی بر Web3** که:
- هر ماژول = یک SaaS مستقل و درآمدزا
- همه ماژول‌ها در یک اکوسیستم یکپارچه
- رابط کاربری Universal (موبایل، دسکتاپ، هدست، TV)
- پشتیبانی کامل از رمزارزها و بلاکچین

---

## 🏗️ معماری اصلی (Architecture)

### 1. اصل طلایی
```
هر فیچر کسب‌وکاری = یک ماژول مستقل
Header/Sidebar/Footer = shared components (نه ماژول!)
```

### 2. ساختار پروژه
```
src/
 ├─ app/                    # Next.js App Router
 │   ├─ page.tsx            # صفحه اصلی (Desktop Shell)
 │   ├─ layout.tsx          # Layout اصلی
 │   └─ api/                # API routes
 │
 ├─ modules/                # 🎯 تمام فیچرها اینجاست
 │   ├─ finance/
 │   │   ├─ wallet/
 │   │   ├─ exchange/
 │   │   └─ banking/
 │   ├─ health/
 │   │   ├─ pharmacy/
 │   │   ├─ telemedicine/
 │   │   ├─ medical-records/
 │   │   └─ fitness/
 │   ├─ social/
 │   │   ├─ messaging/
 │   │   ├─ video-call/
 │   │   └─ communities/
 │   ├─ marketplace/
 │   │   ├─ shop/
 │   │   └─ nft/
 │   ├─ education/
 │   ├─ entertainment/
 │   ├─ travel/
 │   ├─ business/
 │   ├─ iot/
 │   └─ ai/
 │
 ├─ shared/                 # اجزای مشترک
 │   ├─ components/
 │   │   ├─ layout/
 │   │   │   ├─ Header/
 │   │   │   ├─ Footer/
 │   │   │   ├─ LeftSidebar/
 │   │   │   └─ RightSidebar/
 │   │   ├─ ui/
 │   │   │   ├─ Button/
 │   │   │   ├─ Modal/
 │   │   │   ├─ Card/
 │   │   │   └─ Input/
 │   │   └─ widgets/
 │   │       ├─ Weather/
 │   │       ├─ Calendar/
 │   │       └─ Clock/
 │   ├─ hooks/
 │   │   ├─ useAuth.ts
 │   │   ├─ useTab.ts
 │   │   └─ useWallet.ts
 │   ├─ utils/
 │   ├─ types/
 │   └─ styles/
 │
 └─ core/                   # مغز سیستم
     ├─ auth/
     │   ├─ AuthProvider.tsx
     │   ├─ authService.ts
     │   └─ types.ts
     ├─ config/
     │   ├─ env.ts
     │   └─ constants.ts
     ├─ routing/
     │   ├─ TabSystem.tsx
     │   └─ router.ts
     ├─ api-client/
     │   └─ axios.config.ts
     └─ state/
         └─ store.ts
```

### 3. ساختار استاندارد هر ماژول
```
src/modules/{module-name}/
 ├─ pages/              # صفحات ماژول (اگر route مجزا داره)
 ├─ components/         # UI components مخصوص این ماژول
 ├─ services/           # API calls و business logic
 ├─ hooks/              # Custom hooks مخصوص این ماژول
 ├─ store/              # State management (Zustand slice)
 ├─ types/              # TypeScript types
 ├─ utils/              # Helper functions
 ├─ constants/          # ثوابت
 ├─ styles/             # CSS modules
 └─ index.ts            # Public exports
```

---

## 🎨 UI Architecture (معماری رابط کاربری)

### 1. Desktop Shell (صفحه اصلی)
```
┌─────────────────────────────────────┐
│           HEADER                     │
├────┬──────────────────────────┬─────┤
│    │                          │     │
│ L  │                          │  R  │
│ E  │      MAIN SCREEN         │  I  │
│ F  │      (Tab System)        │  G  │
│ T  │                          │  H  │
│    │                          │  T  │
│ S  │                          │     │
│ I  │                          │  S  │
│ D  │                          │  I  │
│ E  │                          │  D  │
│    │                          │  E  │
├────┴──────────────────────────┴─────┤
│           FOOTER                     │
└─────────────────────────────────────┘
```

### 2. Tab System (قلب سیستم)
```tsx
// هر دکمه یک Tab جدید باز می‌کنه
const openTab = (id: string, title: string, icon: string, content: ReactNode) => {
  setTabs([...tabs, { id, title, icon, content }]);
  setActiveTabId(id);
};

// مثال: دکمه ویدیو کال در Footer
<button onClick={() => openTab(
  'video-call',
  'تماس ویدیویی', 
  '🔹',
  <JitsiMeet />
)}>
  🔹
</button>
```

### 3. Module Integration Pattern
```tsx
// الگوی استاندارد اتصال هر ماژول:

// 1. دکمه در UI (Footer/Header/Sidebar)
<button onClick={() => openModule('pharmacy')}>
  🏥
</button>

// 2. تابع openModule
const openModule = (moduleName: string) => {
  // بررسی Auth
  if (requiresAuth(moduleName) && !user) {
    openTab('login', 'ورود', '🔐', <LoginPage />);
    return;
  }
  
  // بررسی Prerequisites
  if (!checkPrerequisites(moduleName)) {
    showError('لطفاً ابتدا پروفایل خود را تکمیل کنید');
    return;
  }
  
  // باز کردن ماژول
  const module = getModule(moduleName);
  openTab(
    module.id,
    module.title,
    module.icon,
    module.component
  );
};
```

---

## 🔐 Authentication Strategy

### 1. Auth Flow
```
1. کاربر روی دکمه کلیک می‌کنه
2. سیستم چک می‌کنه: آیا Auth لازمه؟
3. اگر لازمه و کاربر login نیست → LoginModal باز میشه
4. بعد از login موفق → ماژول اصلی باز میشه
```

### 2. Auth Provider
```tsx
// core/auth/AuthProvider.tsx
interface AuthContextType {
  user: User | null;
  wallet: Wallet | null;
  login: (method: 'google' | 'wallet') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// استفاده در ماژول‌ها:
const { user, isAuthenticated } = useAuth();
```

### 3. Protected Module Wrapper
```tsx
// shared/components/ProtectedModule.tsx
export function ProtectedModule({ 
  children, 
  requiresAuth = true,
  requiresWallet = false 
}) {
  const { isAuthenticated, wallet } = useAuth();
  
  if (requiresAuth && !isAuthenticated) {
    return <LoginPrompt />;
  }
  
  if (requiresWallet && !wallet) {
    return <WalletConnectPrompt />;
  }
  
  return children;
}
```

---

## 🔌 Module Integration Examples

### مثال 1: Jitsi Meet (ساده - بدون Auth)
```tsx
// فقط 15 خط کد!

// در Footer
<button onClick={() => openTab(
  'video-call',
  'تماس ویدیویی',
  '🔹',
  <JitsiMeet />
)}>
  🔹
</button>

// کامپوننت JitsiMeet
function JitsiMeet() {
  return (
    <iframe
      src="https://meet.jit.si/room123"
      allow="camera; microphone; fullscreen"
      style={{ width: '100%', height: '600px' }}
    />
  );
}
```

### مثال 2: YouTube (متوسط - با Auth)
```tsx
// حدود 40 خط کد

// در Entertainment Module
<button onClick={() => openProtectedModule('youtube')}>
  ▶️ YouTube
</button>

// کامپوننت YouTube
function YouTubePlayer() {
  const { user } = useAuth();
  const [videoId, setVideoId] = useState('');
  
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media"
      />
      <Recommendations userId={user.id} />
    </div>
  );
}
```

### مثال 3: Pharmacy (پیچیده - Auth + Medical Record)
```tsx
// حدود 80-100 خط کد

// در Health Module
<button onClick={() => openPharmacy()}>
  💊 داروخانه
</button>

function openPharmacy() {
  const { user, medicalRecord } = useAuth();
  
  // بررسی Auth
  if (!user) {
    openTab('login', 'ورود', '🔐', <LoginPage />);
    return;
  }
  
  // بررسی Medical Record
  if (!medicalRecord) {
    openTab('medical-setup', 'تکمیل پرونده', '📋', <MedicalRecordSetup />);
    return;
  }
  
  // باز کردن داروخانه
  openTab('pharmacy', 'داروخانه', '💊', 
    <PharmacyModule userId={user.id} />
  );
}
```

---

## 🎯 قوانین ماژول‌بندی (برای AI)

### ✅ مجاز
1. Import از `shared/`
2. Import از `core/`
3. Import از همان ماژول
4. استفاده از `useAuth`, `useTab`, `useWallet`

### ❌ ممنوع
1. Import از ماژول دیگر
2. تغییر فایل‌های `app/`
3. تغییر `globals.css`
4. گذاشتن business logic در `layout.tsx`

### 📐 Template استاندارد برای هر ماژول جدید
```tsx
// src/modules/{module}/index.ts
export { default as {Module}Module } from './components/{Module}Module';
export * from './types';
export * from './hooks';

// src/modules/{module}/components/{Module}Module.tsx
'use client';
import { useAuth } from '@/shared/hooks/useAuth';
import styles from './{Module}.module.css';

export default function {Module}Module() {
  const { user } = useAuth();
  
  return (
    <div className={styles.container}>
      {/* محتوای ماژول */}
    </div>
  );
}

// src/modules/{module}/services/api.ts
export const {module}API = {
  getData: async () => { /* ... */ },
  postData: async (data) => { /* ... */ }
};

// src/modules/{module}/hooks/use{Module}.ts
export function use{Module}() {
  // custom hook logic
}
```

---

## 🗂️ Module Communication (ارتباط بین ماژول‌ها)

از آنجایی که ماژول‌ها نمی‌توانند مستقیماً از هم import کنند، از **Event Bus** استفاده می‌کنیم:

```tsx
// core/events/eventBus.ts
type EventType = 
  | 'user:login'
  | 'wallet:connected'
  | 'order:placed'
  | 'notification:new';

const eventBus = {
  emit: (event: EventType, data: any) => {
    window.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  
  on: (event: EventType, callback: (data: any) => void) => {
    window.addEventListener(event, (e: any) => callback(e.detail));
  }
};

// استفاده در Marketplace
eventBus.emit('order:placed', { orderId: 123, amount: 50 });

// استفاده در Wallet
eventBus.on('order:placed', (data) => {
  updateBalance(data.amount);
});
```

---

## 🎨 UI Component Library

### Base Components (در shared/components/ui/)
```tsx
// Button
<Button variant="primary" size="lg">کلیک کنید</Button>

// Modal
<Modal isOpen={isOpen} onClose={handleClose}>
  {children}
</Modal>

// Card
<Card title="عنوان" icon="🎯">
  {content}
</Card>

// Input
<Input 
  type="text" 
  placeholder="متن خود را وارد کنید"
  value={value}
  onChange={handleChange}
/>
```

---

## 📊 State Management Strategy

### Global State (Zustand)
```tsx
// core/state/store.ts
import create from 'zustand';

interface GlobalState {
  user: User | null;
  wallet: Wallet | null;
  tabs: Tab[];
  activeTabId: string | null;
  setUser: (user: User) => void;
  setWallet: (wallet: Wallet) => void;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

export const useStore = create<GlobalState>((set) => ({
  user: null,
  wallet: null,
  tabs: [],
  activeTabId: null,
  setUser: (user) => set({ user }),
  setWallet: (wallet) => set({ wallet }),
  addTab: (tab) => set((state) => ({ 
    tabs: [...state.tabs, tab],
    activeTabId: tab.id 
  })),
  removeTab: (id) => set((state) => ({
    tabs: state.tabs.filter(t => t.id !== id),
    activeTabId: state.tabs[0]?.id || null
  })),
  setActiveTab: (id) => set({ activeTabId: id })
}));
```

### Module State
هر ماژول state خودش را در `store/` خودش نگه می‌داره:

```tsx
// modules/marketplace/store/useMarketplace.ts
import create from 'zustand';

export const useMarketplace = create((set) => ({
  products: [],
  cart: [],
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product]
  }))
}));
```

---

## 🔧 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Tailwind CSS
- **State**: Zustand
- **UI Components**: Custom + shadcn/ui

### Backend
- **API**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Auth**: NextAuth.js + WalletConnect
- **Storage**: Supabase Storage

### Web3
- **Wallet**: WalletConnect
- **Blockchain**: Multi-chain support
- **Smart Contracts**: (به تدریج اضافه می‌شود)

---

## 📋 Checklist برای هر ماژول جدید

قبل از اضافه کردن هر ماژول، این موارد را چک کن:

- [ ] آیا این ماژول یک SaaS مستقل است؟
- [ ] آیا ارزش اقتصادی دارد؟
- [ ] آیا نیاز به Auth دارد؟
- [ ] آیا نیاز به Wallet دارد؟
- [ ] آیا پیش‌نیاز دیگری دارد؟ (مثل Medical Record)
- [ ] کجا قرار می‌گیرد؟ (Footer/Header/Sidebar/ModuleCard)
- [ ] چه icon و title دارد؟
- [ ] چه API های خارجی نیاز دارد؟
- [ ] آیا iframe کافی است یا نیاز به component کامل دارد؟

---

## 🚀 Module Priority List (اولویت توسعه)

### Phase 1: Core + Essential (فاز اول)
1. ✅ Auth System (Google + Wallet)
2. ✅ Tab System
3. ✅ Desktop Shell
4. 🔄 Finance (Wallet + Exchange)
5. 🔄 Social (Messaging + Video Call)

### Phase 2: High Value (فاز دوم)
6. Health (Pharmacy + Telemedicine)
7. Marketplace (Shop + NFT)
8. Education (Courses)
9. Entertainment (Music + Video + Games)

### Phase 3: Expansion (فاز سوم)
10. Travel (Flight + Hotel)
11. Business (CRM + Invoicing)
12. IoT (Smart Home + Car)
13. AI (Chat + Image Generation)

---

## 📝 نکات مهم برای پروژه جدید (ARPAPED)

### 1. از اول Tab System را درست پیاده کن
```tsx
// این خیلی مهمه! باید از همان ابتدا باشد
const [tabs, setTabs] = useState<Tab[]>([]);
const [activeTabId, setActiveTabId] = useState<string | null>(null);
```

### 2. Auth را قبل از هر ماژولی پیاده کن
```tsx
// هیچ ماژولی را بدون این شروع نکن
const { user, isAuthenticated, login, logout } = useAuth();
```

### 3. همه دکمه‌ها باید از openTab استفاده کنند
```tsx
// الگوی استاندارد:
<button onClick={() => openTab(id, title, icon, <Component />)}>
  {icon}
</button>
```

### 4. هر ماژول باید Lazy Load بشه
```tsx
// برای بهبود performance
const PharmacyModule = lazy(() => import('@/modules/health/pharmacy'));
```

### 5. همیشه TypeScript Types تعریف کن
```tsx
// در هر ماژول types.ts داشته باش
export interface Module {
  id: string;
  title: string;
  icon: string;
  requiresAuth: boolean;
  requiresWallet: boolean;
  component: ComponentType;
}
```

---

## 🎯 الگوی پیاده‌سازی برای ماژول‌های پیچیده

### مثال: ماژول سلامت (Health)

```
src/modules/health/
 ├─ pharmacy/
 │   ├─ components/
 │   │   ├─ PharmacySearch.tsx
 │   │   ├─ DrugCard.tsx
 │   │   └─ PrescriptionUpload.tsx
 │   ├─ services/
 │   │   ├─ pharmacyAPI.ts
 │   │   └─ prescriptionService.ts
 │   ├─ store/
 │   │   └─ usePharmacy.ts
 │   └─ index.tsx
 │
 ├─ telemedicine/
 │   ├─ components/
 │   │   ├─ DoctorList.tsx
 │   │   ├─ AppointmentBooking.tsx
 │   │   └─ VideoConsultation.tsx
 │   ├─ services/
 │   │   └─ telemedicineAPI.ts
 │   └─ index.tsx
 │
 ├─ medical-records/
 │   ├─ components/
 │   │   ├─ RecordViewer.tsx
 │   │   ├─ PrescriptionHistory.tsx
 │   │   └─ LabResults.tsx
 │   ├─ services/
 │   │   └─ recordsAPI.ts
 │   └─ index.tsx
 │
 └─ index.ts  # exports all sub-modules
```

---

## 🔍 نکات مهم برای AI

وقتی با AI کار می‌کنی، **همیشه** این دستورات را بده:

```
1. "Read ARCHITECTURE.md before writing any code"
2. "This is a modular super app - each feature is a separate module"
3. "Never edit files in app/, shared/, or core/ without permission"
4. "Always use the Tab System to open modules"
5. "Check Auth requirements before opening protected modules"
6. "Follow the module template structure strictly"
7. "Import only from shared/ or core/, never from other modules"
```

---

## 📂 فایل‌هایی که باید به پروژه جدید منتقل شوند

### 1. Documentation
- [ ] این فایل (KNOWLEDGE_TRANSFER.md)
- [ ] ARCHITECTURE.md (باید بسازی)
- [ ] README.md

### 2. Core Files
- [ ] `core/auth/` (کل پوشه)
- [ ] `core/config/` (کل پوشه)
- [ ] `core/routing/TabSystem.tsx`
- [ ] `core/state/store.ts`

### 3. Shared Components
- [ ] `shared/components/layout/` (Header, Footer, Sidebars)
- [ ] `shared/components/ui/` (Button, Modal, Card, Input)
- [ ] `shared/hooks/` (useAuth, useTab)
- [ ] `shared/types/` (global types)

### 4. Styles
- [ ] `globals.css` (فقط base styles)
- [ ] CSS variables
- [ ] Tailwind config

### 5. Config Files
- [ ] `package.json`
- [ ] `tsconfig.json`
- [ ] `next.config.js`
- [ ] `.env.example`

---

## 🎨 Design System

### Colors
```css
:root {
  --primary: #6366f1;
  --secondary: #a855f7;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --dark: #1e293b;
  --gray: #64748b;
  --light: #f1f5f9;
  --white: #ffffff;
  --border: #e2e8f0;
}
```

### Spacing
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

### Border Radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
```

---

## ✅ خلاصه مهم‌ترین نکات

1. **ماژول = فیچر کسب‌وکاری** (نه component UI)
2. **Tab System = قلب سیستم** (همه چیز باید از طریق این باز بشه)
3. **Auth First** (قبل از هر ماژولی پیاده کن)
4. **No Cross-Module Imports** (فقط از shared/ و core/)
5. **Lazy Loading** (برای همه ماژول‌ها)
6. **TypeScript Everywhere** (هیچ any نزن!)
7. **Event Bus** (برای ارتباط بین ماژول‌ها)
8. **Protected Modules** (چک کردن Auth و Prerequisites)

---

## 📞 وقتی در پروژه جدید گیر کردی

این سوالات را از خودت بپرس:

1. آیا این یک ماژول مستقل است؟
2. آیا Tab System درست کار می‌کند؟
3. آیا Auth چک می‌شود؟
4. آیا از shared/ و core/ import کرده‌ام؟
5. آیا ساختار استاندارد را رعایت کرده‌ام؟

---

**این فایل را در پروژه ARPAPED جدید قرار بده و به AI بگو:**
> "Read KNOWLEDGE_TRANSFER.md completely before starting any work"

✅ **آماده شروع پروژه جدید هستی!**
