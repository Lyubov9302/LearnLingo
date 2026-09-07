import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/public/ukraine.png" alt="" width="28" height="28" />
        <span>LearnLingo</span>
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
      </nav>

      <div className={styles.authButtons}>
        <button type="button" className={styles.btnLogin}>
          <img src="/public/log-in-01.svg" alt="" width="20" height="20" />
          <span>Log in</span>
        </button>
        <button type="button" className={styles.btnRegister}>
          Registration
        </button>
      </div>
    </header>
  );
}