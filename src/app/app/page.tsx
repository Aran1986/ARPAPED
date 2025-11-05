'use client';

import { useEffect } from 'react';
import Header from '@/shared/components/layout/Header/Header';
import Footer from '@/shared/components/layout/Footer/Footer';
import LeftSidebar from '@/shared/components/layout/LeftSidebar/LeftSidebar';
import RightSidebar from '@/shared/components/layout/RightSidebar/RightSidebar';
import TabSystem from '@/core/routing/TabSystem';
import { useTab } from '@/shared/hooks/useTab';
import styles from './page.module.css';

export default function AppPage() {
  const { openTab } = useTab();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');
    
    if (action === 'login') {
      const { LoginModule } = require('@/modules/auth');
      openTab('login', 'ورود', '🔐', <LoginModule />);
      window.history.replaceState({}, '', '/app');
    } else if (action === 'signup') {
      const { SignupModule } = require('@/modules/auth');
      openTab('signup', 'ثبت‌نام', '📝', <SignupModule />);
      window.history.replaceState({}, '', '/app');
    }
  }, [openTab]);

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.body}>
        <LeftSidebar />
        
        <main className={styles.main}>
          <TabSystem />
        </main>
        
        <RightSidebar />
      </div>
      
      <Footer />
    </div>
  );
}

// Location: src/app/app/page.tsx
