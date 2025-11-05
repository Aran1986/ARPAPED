'use client';

import { useStore } from '@/core/state/store';
import LoginModule from '@/modules/auth/login/components/LoginModule';
import styles from './landing.module.css';

export default function LandingPage() {
  const addTab = useStore((state) => state.addTab);

  const handleLogin = () => {
    addTab({
      id: 'login',
      title: 'ورود',
      icon: '🔐',
      content: <LoginModule />
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          به <span className={styles.brand}>آرپاپد</span> خوش آمدید
        </h1>
        <p className={styles.subtitle}>
          سوپر اپ هوشمند برای همه نیازهای دیجیتال شما
        </p>
        <button onClick={handleLogin} className={styles.cta}>
          ورود
        </button>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.icon}>💰</span>
          <h3>مدیریت مالی</h3>
          <p>کیف پول، صرافی، و بانکداری</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>🏥</span>
          <h3>خدمات سلامت</h3>
          <p>داروخانه، پزشک آنلاین</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.icon}>🛍️</span>
          <h3>خرید و فروش</h3>
          <p>فروشگاه و بازار NFT</p>
        </div>
      </div>
    </div>
  );
}

// Location: src/app/landing/page.tsx
