'use client';

import { useState } from 'react';
import styles from './LeftSidebar.module.css';
import { useTab } from './useTab';

interface FeatureCategory {
  id: string;
  title: string;
  icon: string;
  items: {
    id: string;
    title: string;
    icon: string;
  }[];
}

export default function LeftSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>(['finance']);
  const { openTab } = useTab();
  
  const categories: FeatureCategory[] = [
    {
      id: 'finance',
      title: 'مالی',
      icon: '💰',
      items: [
        { id: 'wallet', title: 'کیف پول', icon: '👛' },
        { id: 'exchange', title: 'صرافی', icon: '💱' },
        { id: 'banking', title: 'بانکداری', icon: '🏦' },
      ]
    },
    {
      id: 'health',
      title: 'سلامت',
      icon: '🏥',
      items: [
        { id: 'pharmacy', title: 'داروخانه', icon: '💊' },
        { id: 'telemedicine', title: 'پزشکی از راه دور', icon: '👨‍⚕️' },
        { id: 'fitness', title: 'تناسب اندام', icon: '💪' },
      ]
    },
    {
      id: 'social',
      title: 'اجتماعی',
      icon: '👥',
      items: [
        { id: 'messaging', title: 'پیام‌رسانی', icon: '💬' },
        { id: 'video-call', title: 'تماس ویدیویی', icon: '📹' },
        { id: 'communities', title: 'انجمن‌ها', icon: '🌐' },
      ]
    },
    {
      id: 'marketplace',
      title: 'بازار',
      icon: '🛒',
      items: [
        { id: 'shop', title: 'فروشگاه', icon: '🏪' },
        { id: 'nft', title: 'NFT', icon: '🎨' },
      ]
    },
    {
      id: 'entertainment',
      title: 'سرگرمی',
      icon: '🎮',
      items: [
        { id: 'music', title: 'موزیک', icon: '🎵' },
        { id: 'video', title: 'ویدیو', icon: '📺' },
        { id: 'games', title: 'بازی', icon: '🎯' },
      ]
    },
  ];
  
  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const handleItemClick = (item: any) => {
    openTab(
      item.id,
      item.title,
      item.icon,
      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.icon} {item.title}</h2>
        <p>این ماژول به زودی اضافه خواهد شد...</p>
      </div>
    );
  };
  
  return (
    <>
      <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>فیچرها</h3>
          <button 
            className={styles.collapseBtn}
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? 'باز کردن' : 'بستن'}
          >
            {isCollapsed ? '◀' : '▶'}
          </button>
        </div>
        
        {!isCollapsed && (
          <div className={styles.content}>
            {categories.map(category => (
              <div key={category.id} className={styles.category}>
                <button
                  className={styles.categoryHeader}
                  onClick={() => toggleCategory(category.id)}
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <span className={styles.categoryTitle}>{category.title}</span>
                  <span className={styles.arrow}>
                    {openCategories.includes(category.id) ? '▼' : '◀'}
                  </span>
                </button>
                
                {openCategories.includes(category.id) && (
                  <div className={styles.items}>
                    {category.items.map(item => (
                      <button
                        key={item.id}
                        className={styles.item}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className={styles.itemIcon}>{item.icon}</span>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </aside>
      
      {isCollapsed && (
        <button 
          className={styles.expandTab}
          onClick={() => setIsCollapsed(false)}
          title="باز کردن منو"
        >
          ◀
        </button>
      )}
    </>
  );
}

// Location: ROOT/LeftSidebar.tsx
