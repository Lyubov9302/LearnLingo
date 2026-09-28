import { createContext } from "react";
import type { User } from "firebase/auth";

export interface AuthContextValue {
  user: User | null;
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  favorites: string[];
  toggleFavorite: (teacherId: string) => Promise<void> | void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);