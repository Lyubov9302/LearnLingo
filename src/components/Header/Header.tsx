import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase/config';
import { useAuth } from '../../components/hooks/useAuth';
import { LoginModal, RegisterModal } from '../AuthModal/AuthModal';
import styles from './Header.module.css';

export default function Header() {
  const { user } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Помилка при виході:', error);
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/ukraine.png" alt="" width="28" height="28" />
        <span>LearnLingo</span>
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        {user && <NavLink to="/favorites">Favorites</NavLink>}
      </nav>

      <div className={styles.authButtons}>
        {user ? (
          <div className={styles.userInfo}>
            <span>{user.displayName || 'User'}</span>
            <button
              type="button"
              className={styles.btnLogout}
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              className={styles.btnLogin}
              onClick={() => setIsLoginOpen(true)}
            >
              <img src="/log-in-01.svg" alt="" width="20" height="20" />
              <span>Log in</span>
            </button>
            <button
              type="button"
              className={styles.btnRegister}
              onClick={() => setIsRegisterOpen(true)}
            >
              Registration
            </button>
          </>
        )}
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </header>
  );
}