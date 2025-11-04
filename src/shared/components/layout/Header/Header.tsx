'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import { useAuth } from '@/shared/hooks/useAuth';
import { useTab } from '@/shared/hooks/useTab';

function WebView({ url }: { url: string }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div style={{ 
        padding: '3rem', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <div style={{ fontSize: '4rem' }}>🌐</div>
        <h2 style={{ fontSize: '1.5rem', color: '#334155' }}>
          این سایت در iframe قابل نمایش نیست
        </h2>
        <p style={{ color: '#64748b', marginBottom: '1rem' }}>
          برخی سایت‌ها به دلایل امنیتی اجازه نمایش در iframe را نمی‌دهند
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#6366f1',
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          باز کردن در تب جدید مرورگر ↗
        </a>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          zIndex: 10
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
            <p style={{ color: '#64748b' }}>در حال بارگذاری...</p>
          </div>
        </div>
      )}
      <iframe
        src={url}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads allow-modals allow-popups-to-escape-sandbox"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          display: 'block'
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        title={url}
      />
    </div>
  );
}

export default function Header() {
  const { user, login, logout } = useAuth();
  const { openTab } = useTab();
  const [url, setUrl] = useState('');
  
  const handleNavigate = () => {
    if (!url) return;
    
    let finalUrl = url.trim();
    
    // Add https if no protocol
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      finalUrl = 'https://' + finalUrl;
    }
    
    // Extract display name
    const displayName = finalUrl
      .replace(/^https?:\/\/(www\.)?/, '')
      .split('/')[0]
      .substring(0, 25);
    
    openTab(
      `web-${Date.now()}`,
      displayName,
      '🌐',
      <WebView url={finalUrl} />
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
            placeholder="آدرس سایت را وارد کنید... (مثال: google.com)"
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
          <button 
            onClick={() => {
              const { LoginModule } = require('@/modules/auth');
              openTab('login', 'ورود', '🔐', <LoginModule />);
            }} 
            className={styles.btn}
          >
            ورود
          </button>
        )}
      </div>
    </header>
  );
}

// Location: src/shared/components/layout/Header/Header.tsx
