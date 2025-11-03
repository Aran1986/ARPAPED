'use client';

import Header from '@/shared/components/layout/Header/Header';
import Footer from '@/shared/components/layout/Footer/Footer';
import LeftSidebar from '@/shared/components/layout/LeftSidebar/LeftSidebar';
import RightSidebar from '@/shared/components/layout/RightSidebar/RightSidebar';
import TabSystem from '@/core/routing/TabSystem';
import styles from './page.module.css';

export default function Home() {
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

// Location: src/app/page.tsx
