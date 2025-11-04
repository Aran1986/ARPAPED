'use client';

import { useTab } from '@/shared/hooks/useTab';
import styles from './TabSystem.module.css';

export default function TabSystem() {
  const { tabs, activeTabId, closeTab, switchTab } = useTab();
  
  if (tabs.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>خوش آمدید به ARPAPED</h2>
        <p>برای شروع، روی یکی از آیکون‌ها کلیک کنید</p>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`${styles.tab} ${activeTabId === tab.id ? styles.active : ''}`}
            onClick={() => switchTab(tab.id)}
          >
            <span className={styles.icon}>{tab.icon}</span>
            <span className={styles.title}>{tab.title}</span>
            <button
              className={styles.closeBtn}
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              aria-label="بستن"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      
      <div className={styles.content}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={styles.tabContent}
            style={{ display: activeTabId === tab.id ? 'block' : 'none' }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

// Location: src/core/routing/TabSystem.tsx
