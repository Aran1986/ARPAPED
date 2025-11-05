'use client';

import { useState } from 'react';
import styles from './SignupModule.module.css';
import { useStore } from '@/core/state/store';
import LoginModule from '@/modules/auth/login/components/LoginModule';

export default function SignupModule() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const setUser = useStore((state) => state.setUser);
  const removeTab = useStore((state) => state.removeTab);
  const addTab = useStore((state) => state.addTab);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('لطفاً تمام فیلدها را پر کنید');
      return;
    }

    if (password !== confirmPassword) {
      setError('رمز عبور و تکرار آن مطابقت ندارند');
      return;
    }

    if (password.length < 8) {
      setError('رمز عبور باید حداقل ۸ کاراکتر باشد');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setUser({
        id: Date.now().toString(),
        name: name,
        email: email,
        avatar: '👤'
      });

      removeTab('signup');
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialSignup = (provider: string) => {
    alert(`ثبت‌نام با ${provider} به زودی فعال می‌شود`);
  };

  const handleLoginClick = () => {
    removeTab('signup');
    addTab({
      id: 'login',
      title: 'ورود',
      icon: '🔐',
      content: <LoginModule />
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>ثبت‌نام در آرپاپد</h2>
          <p className={styles.subtitle}>سفر خود را با ما آغاز کنید</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label}>نام کامل</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="نام و نام خانوادگی"
              disabled={isLoading}
            />
          </div>

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
              placeholder="حداقل ۸ کاراکتر"
              disabled={isLoading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>تکرار رمز عبور</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
              placeholder="رمز عبور را دوباره وارد کنید"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isLoading}
          >
            {isLoading ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
          </button>
        </form>

        <div className={styles.divider}>
          <span>یا ثبت‌نام با</span>
        </div>

        <div className={styles.socialButtons}>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialSignup('گوگل')}
          >
            <span>🔵</span>
            گوگل
          </button>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialSignup('توییتر')}
          >
            <span>🐦</span>
            توییتر
          </button>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialSignup('کیف پول')}
          >
            <span>👛</span>
            کیف پول
          </button>
        </div>

        <div className={styles.footer}>
          <p>قبلاً ثبت‌نام کرده‌اید؟</p>
          <button
            type="button"
            onClick={handleLoginClick}
            className={styles.loginLink}
          >
            وارد شوید
          </button>
        </div>
      </div>
    </div>
  );
}

// Location: src/modules/auth/signup/components/SignupModule.tsx
