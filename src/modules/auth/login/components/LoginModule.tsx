'use client';

import { useState } from 'react';
import styles from './LoginModule.module.css';
import { useStore } from '@/core/state/store';

export default function LoginModule() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const setUser = useStore((state) => state.setUser);
  const removeTab = useStore((state) => state.removeTab);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('لطفاً ایمیل و رمز عبور را وارد کنید');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setUser({
        id: Date.now().toString(),
        name: 'کاربر آزمایشی',
        email: email,
        avatar: '👤'
      });

      removeTab('login');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>ورود به آرپاپد</h2>
          <p className={styles.subtitle}>به حساب کاربری خود وارد شوید</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label}>ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="example@email.com"
              disabled={isLoading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="رمز عبور خود را وارد کنید"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isLoading}
          >
            {isLoading ? 'در حال ورود...' : 'ورود'}
          </button>
        </form>
      </div>
    </div>
  );
}

// Location: src/modules/auth/login/components/LoginModule.tsx
