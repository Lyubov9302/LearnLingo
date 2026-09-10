import Modal from '../Modal';
import styles from '../AuthModal.module.css';

interface LogInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogInModal({ isOpen, onClose }: LogInModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>Log In</h2>
      <p className={styles.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.submitBtn}>
          Log In
        </button>
      </form>
    </Modal>
  );
}