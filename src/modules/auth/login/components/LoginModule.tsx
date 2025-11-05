'use client';

import { useState } from 'react';
import styles from './LoginModule.module.css';
import { useStore } from '@/core/state/store';
import SignupModule from '@/modules/auth/signup/components/SignupModule';

export default function LoginModule() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const setUser = useStore((state) => state.setUser);
  const removeTab = useStore((state) => state.removeTab);
  const addTab = useStore((state) => state.addTab);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('لطفاً ایمیل و رمز عبور را وارد کنید');
      return;
    }

    setIsLoading(true);

    // Simulate API call
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

  const handleSocialLogin = (provider: string) => {
    alert(`ورود با ${provider} به زودی فعال می‌شود`);
  };

  const handleSignupClick = () => {
    removeTab('login');
    addTab({
      id: 'signup',
      title: 'ثبت‌نام',
      icon: '✍️',
      content: <SignupModule />
    });
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

        <div className={styles.divider}>
          <span>یا ورود با</span>
        </div>

        <div className={styles.socialButtons}>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('گوگل')}
          >
            <span>🔵</span>
            گوگل
          </button>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('توییتر')}
          >
            <span>🐦</span>
            توییتر
          </button>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('کیف پول')}
          >
            <span>👛</span>
            کیف پول
          </button>
        </div>

        <div className={styles.footer}>
          <p>حساب کاربری ندارید؟</p>
          <button
            type="button"
            onClick={handleSignupClick}
            className={styles.signupLink}
          >
            ثبت‌نام کنید
          </button>
        </div>
      </div>
    </div>
  );
}

// Location: src/modules/auth/login/components/LoginModule.tsx
