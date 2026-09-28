import { useState, useEffect, type ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { ref, onValue, set, remove } from "firebase/database";
import { auth, db } from "../firebase/config";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

 
useEffect(() => {
  if (!user) return;

  const favoritesRef = ref(db, `users/${user.uid}/favorites`);
  const unsubscribe = onValue(favoritesRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      
      let favIds: string[] = [];
      if (Array.isArray(data)) {
        favIds = data
          .map((item, index) => (item ? String(index) : null))
          .filter((id): id is string => id !== null);
      } else if (typeof data === 'object' && data !== null) {
        favIds = Object.keys(data);
      }

      setFavorites(favIds);
    } else {
      setFavorites([]);
    }
  });

  return () => unsubscribe();
}, [user]);

  const toggleFavorite = async (teacherId: string) => {
    if (!user) {
      alert("Будь ласка, увійдіть в акаунт, щоб додавати вчителів до улюблених!");
      return;
    }

    const isFav = favorites.includes(teacherId);
    const favRef = ref(db, `users/${user.uid}/favorites/${teacherId}`);

    try {
      if (isFav) {
        await remove(favRef);
      } else {
        await set(favRef, true);
      }
    } catch (error) {
      console.error("Помилка при зміні улюбленого вчителя:", error);
    }
  };

  const value = {
    user,
    isLoggedIn: !!user,
    isAuthLoading,
    favorites,
    toggleFavorite,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};