# 🏛️ ARPAPED - Architecture Documentation

**⚠️ CRITICAL: این قوانین MUST be followed. هیچ استثنایی وجود ندارد!**

---

## 📐 Architecture Rules (قوانین معماری)

### Rule 1: Module Definition
```
✅ Module = Business Feature (Marketplace, Health, Finance)
❌ Module ≠ UI Component (Header, Footer, Button)
```

### Rule 2: File Organization
```
ALLOWED to edit:
  ✅ /src/modules/{your-module}/
  ✅ Files you create
  
FORBIDDEN to edit:
  ❌ /src/app/
  ❌ /src/shared/
  ❌ /src/core/
  ❌ globals.css
  ❌ layout.tsx
```

### Rule 3: Import Rules
```tsx
// ✅ ALLOWED
import { Button } from '@/shared/components/ui/Button';
import { useAuth } from '@/shared/hooks/useAuth';
import { API_URL } from '@/core/config/constants';
import { LocalComponent } from './components/LocalComponent';

// ❌ FORBIDDEN
import { Something } from '@/modules/other-module/...';
import { Header } from '@/shared/components/layout/Header';  // Don't import layout!
```

### Rule 4: Tab System (MANDATORY)
```tsx
// همه ماژول‌ها MUST use Tab System

// ✅ CORRECT
<button onClick={() => openTab('pharmacy', 'داروخانه', '💊', <PharmacyModule />)}>
  💊
</button>

// ❌ WRONG
<Link href="/pharmacy">💊</Link>  // No direct routing!
```

### Rule 5: Authentication Check
```tsx
// BEFORE opening any protected module:

function openProtectedModule(moduleId: string) {
  const { user, isAuthenticated } = useAuth();
  
  // 1. Check Auth
  if (!isAuthenticated) {
    openTab('login', 'ورود', '🔐', <LoginPage />);
    return;
  }
  
  // 2. Check Prerequisites
  if (!checkPrerequisites(moduleId)) {
    showError('Prerequisites not met');
    return;
  }
  
  // 3. Open Module
  openTab(moduleId, title, icon, <Module />);
}
```

---

## 🗂️ Standard Module Structure (ساختار استاندارد)

### Every module MUST have this structure:

```
src/modules/{module-name}/
 ├─ components/
 │   ├─ {Module}Main.tsx        # Main component
 │   ├─ {Feature}Card.tsx       # Feature components
 │   └─ index.ts                # Export all components
 │
 ├─ services/
 │   ├─ api.ts                  # API calls
 │   └─ {module}Service.ts      # Business logic
 │
 ├─ hooks/
 │   └─ use{Module}.ts          # Custom hooks
 │
 ├─ store/
 │   └─ use{Module}Store.ts     # Zustand store
 │
 ├─ types/
 │   └─ index.ts                # TypeScript types
 │
 ├─ utils/
 │   └─ helpers.ts              # Helper functions
 │
 ├─ constants/
 │   └─ index.ts                # Constants
 │
 ├─ styles/
 │   └─ {Module}.module.css     # CSS modules
 │
 └─ index.ts                    # Public API
```

### Example: Health Module
```
src/modules/health/
 ├─ pharmacy/
 │   ├─ components/
 │   ├─ services/
 │   ├─ hooks/
 │   └─ index.ts
 ├─ telemedicine/
 │   └─ ...
 └─ index.ts
```

---

## 🎯 Component Template

### Main Module Component Template
```tsx
'use client';

import { useAuth } from '@/shared/hooks/useAuth';
import { Button } from '@/shared/components/ui/Button';
import styles from './PharmacyModule.module.css';

interface PharmacyModuleProps {
  // props
}

export default function PharmacyModule({ }: PharmacyModuleProps) {
  const { user } = useAuth();
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>💊 داروخانه</h1>
      </header>
      
      <main className={styles.main}>
        {/* محتوا */}
      </main>
    </div>
  );
}

// Location: src/modules/health/pharmacy/components/PharmacyModule.tsx
```

### Service Template
```tsx
// src/modules/health/pharmacy/services/api.ts

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const pharmacyAPI = {
  searchDrugs: async (query: string) => {
    const response = await fetch(`${API_BASE}/pharmacy/search?q=${query}`);
    return response.json();
  },
  
  getDrugDetails: async (id: string) => {
    const response = await fetch(`${API_BASE}/pharmacy/drugs/${id}`);
    return response.json();
  },
  
  createOrder: async (data: OrderData) => {
    const response = await fetch(`${API_BASE}/pharmacy/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
```

### Hook Template
```tsx
// src/modules/health/pharmacy/hooks/usePharmacy.ts

import { useState, useEffect } from 'react';
import { pharmacyAPI } from '../services/api';

export function usePharmacy() {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const searchDrugs = async (query: string) => {
    setLoading(true);
    try {
      const results = await pharmacyAPI.searchDrugs(query);
      setDrugs(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return { drugs, loading, searchDrugs };
}
```

### Store Template
```tsx
// src/modules/health/pharmacy/store/usePharmacyStore.ts

import create from 'zustand';

interface PharmacyState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const usePharmacyStore = create<PharmacyState>((set) => ({
  cart: [],
  
  addToCart: (item) => set((state) => ({
    cart: [...state.cart, item]
  })),
  
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),
  
  clearCart: () => set({ cart: [] })
}));
```

---

## 🔐 Authentication Patterns

### Pattern 1: Simple Auth Check
```tsx
function openModule() {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    openTab('login', 'ورود', '🔐', <LoginPage />);
    return;
  }
  
  openTab('module', 'ماژول', '🎯', <Module />);
}
```

### Pattern 2: Auth + Wallet Check
```tsx
function openWalletModule() {
  const { isAuthenticated, wallet } = useAuth();
  
  if (!isAuthenticated) {
    openTab('login', 'ورود', '🔐', <LoginPage />);
    return;
  }
  
  if (!wallet) {
    openTab('connect-wallet', 'اتصال کیف پول', '👛', <WalletConnect />);
    return;
  }
  
  openTab('wallet', 'کیف پول', '💰', <WalletModule />);
}
```

### Pattern 3: Auth + Prerequisites
```tsx
function openPharmacy() {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    openTab('login', 'ورود', '🔐', <LoginPage />);
    return;
  }
  
  if (!user.medicalRecord) {
    openTab('medical-setup', 'تکمیل پرونده', '📋', <MedicalRecordSetup />);
    return;
  }
  
  openTab('pharmacy', 'داروخانه', '💊', <PharmacyModule />);
}
```

---

## 🎨 Styling Rules

### Rule 1: Use CSS Modules for Component Styles
```tsx
// ✅ CORRECT
import styles from './Component.module.css';
<div className={styles.container}>...</div>

// ❌ WRONG
<div className="container">...</div>  // Global class
<div style={{ color: 'red' }}>...</div>  // Inline styles
```

### Rule 2: Use Tailwind for Utility Classes
```tsx
// ✅ CORRECT
<div className="flex items-center gap-4">...</div>

// ❌ WRONG - Don't use Tailwind for complex layouts
<div className="w-[432px] h-[234px] bg-[#f4f4f4] rounded-[23px]">...</div>
```

### Rule 3: Never Edit Global Styles
```
❌ FORBIDDEN:
- Editing globals.css
- Adding global classes
- Overriding shared component styles
```

---

## 📡 API Integration Patterns

### Pattern 1: Simple GET
```tsx
const data = await fetch('/api/endpoint').then(r => r.json());
```

### Pattern 2: With Auth Token
```tsx
const { token } = useAuth();

const data = await fetch('/api/endpoint', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(r => r.json());
```

### Pattern 3: External API (e.g., YouTube)
```tsx
function YouTubePlayer() {
  const { user } = useAuth();
  const [videoId, setVideoId] = useState('');
  
  // Pass user token to YouTube iframe
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?token=${user.youtubeToken}`;
  
  return (
    <iframe
      src={youtubeUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media"
      style={{ width: '100%', height: '600px' }}
    />
  );
}
```

---

## 🔄 State Management Rules

### Global State (in core/state/)
```
✅ Use for:
- User authentication
- Wallet connection
- Tab system state
- Global settings

❌ Don't use for:
- Module-specific data
- Form state
- Temporary UI state
```

### Module State (in module/store/)
```
✅ Use for:
- Module-specific data
- Shopping cart
- Search results
- Module settings

❌ Don't use for:
- Cross-module data
- Global user data
```

---

## 🧩 Module Integration Checklist

Before integrating a new module, answer these:

- [ ] What is the module name?
- [ ] Where is the button? (Footer/Header/Sidebar/Card)
- [ ] What is the icon?
- [ ] Does it require Auth?
- [ ] Does it require Wallet?
- [ ] Does it require Prerequisites?
- [ ] Is it iframe or custom component?
- [ ] What API does it use?
- [ ] Does it need to store data?

---

## 🚫 Common Mistakes to Avoid

### ❌ Mistake 1: Direct Routing
```tsx
// ❌ WRONG
<Link href="/pharmacy">Go to Pharmacy</Link>

// ✅ CORRECT
<button onClick={() => openTab('pharmacy', 'داروخانه', '💊', <PharmacyModule />)}>
  Go to Pharmacy
</button>
```

### ❌ Mistake 2: Cross-Module Import
```tsx
// ❌ WRONG
import { PharmacyCard } from '@/modules/health/pharmacy/components/PharmacyCard';

// ✅ CORRECT
// Create a shared component instead, or use Event Bus
```

### ❌ Mistake 3: Editing Shared Components
```tsx
// ❌ WRONG - Don't edit Header.tsx for your module
// Add your button in your module and use openTab

// ✅ CORRECT - Use openTab from your module
```

### ❌ Mistake 4: No Auth Check
```tsx
// ❌ WRONG
<button onClick={() => openTab('wallet', 'کیف پول', '💰', <WalletModule />)}>
  Wallet
</button>

// ✅ CORRECT
<button onClick={openWalletWithCheck}>
  Wallet
</button>

function openWalletWithCheck() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    openTab('login', 'ورود', '🔐', <LoginPage />);
    return;
  }
  openTab('wallet', 'کیف پول', '💰', <WalletModule />);
}
```

---

## 📝 Documentation Requirements

### Every module MUST have:

1. **README.md** in module root
```md
# Module Name

## Description
[What this module does]

## Features
- Feature 1
- Feature 2

## Prerequisites
- Auth required: Yes/No
- Wallet required: Yes/No
- Other: [List]

## Integration
[How to integrate this module]

## API
[API endpoints used]
```

2. **Types Documentation**
```tsx
// types/index.ts
/**
 * Main module props
 */
export interface ModuleProps {
  userId: string;
  // ...
}
```

3. **Component Comments**
```tsx
/**
 * PharmacyModule - Main pharmacy interface
 * 
 * @requires Authentication
 * @requires MedicalRecord
 * 
 * Features:
 * - Search drugs
 * - View prescriptions
 * - Order medications
 */
export default function PharmacyModule() {
  // ...
}
```

---

## 🎯 Performance Rules

### Rule 1: Lazy Load All Modules
```tsx
// ✅ CORRECT
const PharmacyModule = lazy(() => import('@/modules/health/pharmacy'));

// ❌ WRONG
import PharmacyModule from '@/modules/health/pharmacy';
```

### Rule 2: Memoize Expensive Calculations
```tsx
const expensiveResult = useMemo(() => {
  return calculateSomething(data);
}, [data]);
```

### Rule 3: Optimize Images
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image 
  src="/image.jpg" 
  width={500} 
  height={300} 
  alt="Description"
/>
```

---

## 🔒 Security Rules

### Rule 1: Never Store Sensitive Data in State
```tsx
// ❌ WRONG
const [password, setPassword] = useState('');

// ✅ CORRECT
// Passwords should only be in controlled inputs, never stored
```

### Rule 2: Validate All User Input
```tsx
function handleSubmit(data: FormData) {
  // Validate
  if (!isValidEmail(data.email)) {
    throw new Error('Invalid email');
  }
  
  // Sanitize
  const sanitized = sanitizeInput(data);
  
  // Process
  await api.submit(sanitized);
}
```

### Rule 3: Use Environment Variables for Secrets
```tsx
// ✅ CORRECT
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// ❌ WRONG
const API_KEY = 'hardcoded-key-123';
```

---

## 📊 Testing Requirements

### Unit Tests
```tsx
// module/__tests__/Component.test.tsx
import { render, screen } from '@testing-library/react';
import PharmacyModule from '../components/PharmacyModule';

describe('PharmacyModule', () => {
  it('should render correctly', () => {
    render(<PharmacyModule />);
    expect(screen.getByText('داروخانه')).toBeInTheDocument();
  });
});
```

---

## ✅ Definition of Done

A module is complete when:

- [ ] All components follow the template
- [ ] Auth checks are implemented
- [ ] Types are documented
- [ ] Styles use CSS Modules
- [ ] No cross-module imports
- [ ] Lazy loading is implemented
- [ ] README.md is written
- [ ] Integration is tested
- [ ] No console errors
- [ ] Code is reviewed

---

## 🆘 When You're Stuck

Ask yourself:

1. Am I following the module structure?
2. Am I using Tab System correctly?
3. Am I checking Auth?
4. Am I importing from allowed paths only?
5. Have I read the KNOWLEDGE_TRANSFER.md?

If still stuck, check the templates and examples above.

---

**⚠️ REMEMBER: These rules are NOT suggestions. They are REQUIREMENTS.**

**Follow them strictly or the architecture will break.**
