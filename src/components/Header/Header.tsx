import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import LogInModal from '../Modal/LogInModal/LogInModal';
import RegisterModal from '../Modal/RegisterModal/RegisterModal';
import { useState } from 'react';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/ukraine.png" alt="" width="28" height="28" />
        <span>LearnLingo</span>
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
      </nav>

      <div className={styles.authButtons}>
        <button type="button" className={styles.btnLogin}
        onClick={() => setIsLoginOpen(true)}
        >
          <img src="/log-in-01.svg" alt="" width="20" height="20" />
          <span>Log in</span>
          
        </button>
        <button type="button" className={styles.btnRegister}
        onClick={() => setIsRegisterOpen(true)}
        >
          Registration
        </button>
      </div>


      <LogInModal 
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