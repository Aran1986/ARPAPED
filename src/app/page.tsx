'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/shared/hooks/useAuth';

export default function RootPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/app');
    } else {
      router.push('/landing.html');
    }
  }, [isAuthenticated, router]);

  return null;
}

// Location: src/app/page.tsx

