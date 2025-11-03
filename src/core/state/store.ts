'use client';

import { create } from 'zustand';

export interface Tab {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

interface GlobalState {
  // Tabs
  tabs: Tab[];
  activeTabId: string | null;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  
  // User
  user: any | null;
  setUser: (user: any) => void;
  
  // Wallet
  wallet: any | null;
  setWallet: (wallet: any) => void;
}

export const useStore = create<GlobalState>((set) => ({
  // Tabs
  tabs: [],
  activeTabId: null,
  
  addTab: (tab) => set((state) => {
    const exists = state.tabs.find(t => t.id === tab.id);
    if (exists) {
      return { activeTabId: tab.id };
    }
    return {
      tabs: [...state.tabs, tab],
      activeTabId: tab.id
    };
  }),
  
  removeTab: (id) => set((state) => {
    const newTabs = state.tabs.filter(t => t.id !== id);
    const newActiveId = newTabs[0]?.id || null;
    return {
      tabs: newTabs,
      activeTabId: newActiveId
    };
  }),
  
  setActiveTab: (id) => set({ activeTabId: id }),
  
  // User
  user: null,
  setUser: (user) => set({ user }),
  
  // Wallet
  wallet: null,
  setWallet: (wallet) => set({ wallet }),
}));

// Location: src/core/state/store.ts
