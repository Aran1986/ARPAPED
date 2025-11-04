'use client';

import styles from './Footer.module.css';
import { useTab } from '@/shared/hooks/useTab';
import { useAuth } from '@/shared/hooks/useAuth';

export default function Footer() {
  const { openTab } = useTab();
  const { user } = useAuth();
  
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

  const handleSignup = () => {
    const { SignupModule } = require('@/modules/auth');
    openTab('signup', 'ثبت‌نام', '📝', <SignupModule />);
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
        {!user && (
          <button 
            className={styles.actionBtn} 
            onClick={handleSignup}
            title="ثبت‌نام"
          >
            📝
          </button>
        )}
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

// Location: src/shared/components/layout/Footer/Footer.tsx
