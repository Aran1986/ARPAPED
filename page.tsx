'use client';

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import TabSystem from './TabSystem';
import { useTab } from './useTab';
import styles from './page.module.css';

export default function AppPage() {
  const { openTab } = useTab();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');
    
    if (action === 'login') {
      const LoginModule = require('./LoginModule').default;
      openTab('login', 'ورود', '🔐', <LoginModule />);
      window.history.replaceState({}, '', '/app');
    } else if (action === 'signup') {
      const SignupModule = require('./SignupModule').default;
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

// Location: ROOT/page.tsx
