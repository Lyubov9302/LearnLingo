import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Modal from "../Modal/Modal";
import styles from "./AuthModal.module.css";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>Log In</h2>
      <p className={styles.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          className={styles.input}
        />

        <button
          type="button"
          className={styles.eyeBtnLogin}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label="Toggle password visibility"
        >
          {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </button>

        <button type="submit" className={styles.submitBtn}>
          Log In
        </button>
      </form>
    </Modal>
  );
};

export const RegisterModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>Registration</h2>
      <p className={styles.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          className={styles.input}
        />

        <button
          type="button"
          className={styles.eyeBtnRegister}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label="Toggle password visibility"
        >
          {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </button>

        <button type="submit" className={styles.submitBtn}>
          Sign Up
        </button>
      </form>
    </Modal>
  );
};