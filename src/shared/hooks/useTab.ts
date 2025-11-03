'use client';

import { useStore } from '@/core/state/store';
import type { Tab } from '@/core/state/store';

export function useTab() {
  const { tabs, activeTabId, addTab, removeTab, setActiveTab } = useStore();
  
  const openTab = (id: string, title: string, icon: string, content: React.ReactNode) => {
    addTab({ id, title, icon, content });
  };
  
  const closeTab = (id: string) => {
    removeTab(id);
  };
  
  const switchTab = (id: string) => {
    setActiveTab(id);
  };
  
  return {
    tabs,
    activeTabId,
    openTab,
    closeTab,
    switchTab,
  };
}

// Location: src/shared/hooks/useTab.ts
