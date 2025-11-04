'use client';

import { useState } from 'react';
import styles from './LoginModule.module.css';
import { useAuth } from '@/shared/hooks/useAuth';

export default function LoginModule() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // شبیه‌سازی ورود (فعلاً صوری)
    setTimeout(() => {
      setUser({
        id: '1',
        name: email.split('@')[0],
        email: email
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    // فعلاً صوری
    alert(`ورود با ${provider} به زودی فعال می‌شود...`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>ورود به آرپاپد</h2>
          <p className={styles.subtitle}>به اکوسیستم خود خوش آمدید</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="••••••••"
              required
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

        <div className={styles.divider}>
          <span>یا ورود با</span>
        </div>

        <div className={styles.socialButtons}>
          <button
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('گوگل')}
          >
            <span>🔵</span>
            گوگل
          </button>
          <button
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('توییتر')}
          >
            <span>🐦</span>
            توییتر
          </button>
          <button
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('کیف پول')}
          >
            <span>👛</span>
            کیف پول
          </button>
        </div>
      </div>
    </div>
  );
}

// Location: src/modules/auth/login/components/LoginModule.tsx
