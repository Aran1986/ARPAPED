'use client';

import { useState } from 'react';
import styles from './RightSidebar.module.css';

interface SettingsCategory {
  id: string;
  title: string;
  icon: string;
  items: {
    id: string;
    title: string;
    type: 'toggle' | 'select' | 'color' | 'slider';
    value?: any;
    options?: string[];
  }[];
}

export default function RightSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>(['appearance']);
  const [settings, setSettings] = useState<Record<string, any>>({
    darkMode: false,
    language: 'fa',
    theme: '#6366f1',
    fontSize: 100,
    notifications: true,
    sounds: true,
  });
  
  const categories: SettingsCategory[] = [
    {
      id: 'appearance',
      title: 'ظاهر',
      icon: '🎨',
      items: [
        { id: 'darkMode', title: 'حالت تاریک', type: 'toggle' },
        { id: 'theme', title: 'رنگ اصلی', type: 'color' },
        { id: 'fontSize', title: 'اندازه فونت', type: 'slider' },
      ]
    },
    {
      id: 'general',
      title: 'عمومی',
      icon: '⚙️',
      items: [
        { id: 'language', title: 'زبان', type: 'select', options: ['fa', 'en', 'ar'] },
        { id: 'notifications', title: 'اعلان‌ها', type: 'toggle' },
        { id: 'sounds', title: 'صداها', type: 'toggle' },
      ]
    },
    {
      id: 'privacy',
      title: 'حریم خصوصی',
      icon: '🔒',
      items: [
        { id: 'profileVisibility', title: 'نمایش پروفایل', type: 'toggle' },
        { id: 'dataSharing', title: 'اشتراک داده', type: 'toggle' },
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
  
  const handleSettingChange = (id: string, value: any) => {
    setSettings(prev => ({ ...prev, [id]: value }));
  };
  
  const renderSetting = (item: any) => {
    switch (item.type) {
      case 'toggle':
        return (
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={settings[item.id] || false}
              onChange={(e) => handleSettingChange(item.id, e.target.checked)}
            />
            <span className={styles.toggleSlider}></span>
          </label>
        );
      
      case 'select':
        return (
          <select
            className={styles.select}
            value={settings[item.id] || item.options?.[0]}
            onChange={(e) => handleSettingChange(item.id, e.target.value)}
          >
            {item.options?.map(opt => (
              <option key={opt} value={opt}>{opt.toUpperCase()}</option>
            ))}
          </select>
        );
      
      case 'color':
        return (
          <input
            type="color"
            className={styles.colorPicker}
            value={settings[item.id] || '#6366f1'}
            onChange={(e) => handleSettingChange(item.id, e.target.value)}
          />
        );
      
      case 'slider':
        return (
          <div className={styles.sliderContainer}>
            <input
              type="range"
              className={styles.slider}
              min="80"
              max="120"
              value={settings[item.id] || 100}
              onChange={(e) => handleSettingChange(item.id, Number(e.target.value))}
            />
            <span className={styles.sliderValue}>{settings[item.id] || 100}%</span>
          </div>
        );
    }
  };
  
  return (
    <>
      <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>تنظیمات</h3>
          <button 
            className={styles.collapseBtn}
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? 'باز کردن' : 'بستن'}
          >
            {isCollapsed ? '▶' : '◀'}
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
                    {openCategories.includes(category.id) ? '▼' : '▶'}
                  </span>
                </button>
                
                {openCategories.includes(category.id) && (
                  <div className={styles.items}>
                    {category.items.map(item => (
                      <div key={item.id} className={styles.item}>
                        <span className={styles.itemTitle}>{item.title}</span>
                        {renderSetting(item)}
                      </div>
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
          title="باز کردن تنظیمات"
        >
          ▶
        </button>
      )}
    </>
  );
}

// Location: src/shared/components/layout/RightSidebar/RightSidebar.tsx