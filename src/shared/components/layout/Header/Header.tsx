'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import { useAuth } from '@/shared/hooks/useAuth';
import { useTab } from '@/shared/hooks/useTab';

export default function Header() {
  const { user, login, logout } = useAuth();
  const { openTab } = useTab();
  const [url, setUrl] = useState('');
  
  const handleNavigate = () => {
    if (!url) return;
    
    let finalUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      finalUrl = 'https://' + url;
    }
    
    openTab(
      `web-${Date.now()}`,
      url.replace(/^https?:\/\//, '').substring(0, 20),
      '🌐',
      <iframe 
        src={finalUrl} 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title={url}
      />
    );
    
    setUrl('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNavigate();
    }
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.logo}>ARPAPED</h1>
      </div>
      
      <div className={styles.center}>
        <div className={styles.urlBar}>
          <input 
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="آدرس سایت را وارد کنید..."
            className={styles.urlInput}
          />
          <button onClick={handleNavigate} className={styles.goBtn} title="برو">
            ➜
          </button>
        </div>
      </div>
      
      <div className={styles.right}>
        {user ? (
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}</span>
            <button onClick={logout} className={styles.btn}>
              خروج
            </button>
          </div>
        ) : (
          <button onClick={() => login('google')} className={styles.btn}>
            ورود
          </button>
        )}
      </div>
    </header>
  );
}

// Location: src/shared/components/layout/Header/Header.tsx
