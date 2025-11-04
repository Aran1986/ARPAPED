'use client';

import { useState } from 'react';
import styles from './SignupModule.module.css';
import { useAuth } from '@/shared/hooks/useAuth';

export default function SignupModule() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('رمز عبور و تکرار آن مطابقت ندارند');
      return;
    }

    setIsLoading(true);

    // شبیه‌سازی ثبت‌نام (فعلاً صوری)
    setTimeout(() => {
      setUser({
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialSignup = (provider: string) => {
    alert(`ثبت‌نام با ${provider} به زودی فعال می‌شود...`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>ثبت‌نام در آرپاپد</h2>
          <p className={styles.subtitle}>سفر خود را با ما آغاز کنید</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>نام کامل</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="نام و نام خانوادگی"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="حداقل ۸ کاراکتر"
              minLength={8}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>تکرار رمز عبور</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              placeholder="رمز عبور را دوباره وارد کنید"
              required
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
            className={styles.socialBtn}
            onClick={() => handleSocialSignup('گوگل')}
          >
            <span>🔵</span>
            گوگل
          </button>
          <button
            className={styles.socialBtn}
            onClick={() => handleSocialSignup('توییتر')}
          >
            <span>🐦</span>
            توییتر
          </button>
          <button
            className={styles.socialBtn}
            onClick={() => handleSocialSignup('کیف پول')}
          >
            <span>👛</span>
            کیف پول
          </button>
        </div>
      </div>
    </div>
  );
}

// Location: src/modules/auth/signup/components/SignupModule.tsx
