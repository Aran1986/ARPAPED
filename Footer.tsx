'use client';

import styles from './Footer.module.css';
import { useTab } from './useTab';

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
  
  const handleMessage = () => {
    alert('قابلیت پیام‌رسانی به زودی اضافه خواهد شد...');
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <button 
          className={styles.actionBtn} 
          onClick={handleMessage}
          title="پیام‌رسانی"
        >
          💬
        </button>
      </div>
      
      <div className={styles.centerSection}>
        <input 
          type="text" 
          placeholder="پیام خود را بنویسید..."
          className={styles.messageInput}
        />
        <button className={styles.sendBtn} title="ارسال">
          ➤
        </button>
      </div>
      
      <div className={styles.rightSection}>
        <button 
          className={styles.actionBtn} 
          onClick={handleOpenTest}
          title="تست سیستم"
        >
          🧪
        </button>
      </div>
    </footer>
  );
}

// Location: ROOT/Footer.tsx
