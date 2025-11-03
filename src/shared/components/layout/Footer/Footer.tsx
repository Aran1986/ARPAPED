'use client';

import styles from './Footer.module.css';
import { useTab } from '@/shared/hooks/useTab';

export default function Footer() {
  const { openTab } = useTab();
  
  const handleOpenTest = () => {
    openTab('test', 'تست', '🧪', (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>تست موفقیت‌آمیز! ✅</h2>
        <p>سیستم Tab به درستی کار می‌کند.</p>
      </div>
    ));
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <button className={styles.iconBtn} title="پیام" onClick={() => alert('قابلیت پیام‌رسانی به زودی...')}>
          💬
        </button>
      </div>
      
      <div className={styles.center}>
        <input 
          type="text" 
          placeholder="پیام خود را بنویسید..."
          className={styles.input}
        />
        <button className={styles.sendBtn} title="ارسال">
          ➤
        </button>
      </div>
      
      <div className={styles.right}>
        <button className={styles.iconBtn} onClick={handleOpenTest} title="تست سیستم">
          🧪
        </button>
      </div>
    </footer>
  );
}

// Location: src/shared/components/layout/Footer/Footer.tsx
