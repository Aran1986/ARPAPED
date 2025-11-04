'use client';

import { useStore } from '@/core/state/store';

export function useAuth() {
  const { user, setUser, wallet, setWallet } = useStore();
  
  const login = async (method: 'google' | 'wallet') => {
    console.log('Login with:', method);
    // TODO: Implement real login logic
    setUser({ id: '1', name: 'Test User', email: 'test@example.com' });
  };
  
  const logout = () => {
    setUser(null);
    setWallet(null);
    // Redirect to landing page
    window.location.href = '/landing';
  };
  
  return {
    user,
    wallet,
    isAuthenticated: !!user,
    login,
    logout,
  };
}

// Location: src/shared/hooks/useAuth.ts
