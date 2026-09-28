import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/config";
import { TeacherCard } from "../../components/TeacherCard/TeacherCard";
import { useAuth } from "../../components/hooks/useAuth";
import type { Teacher } from "../../types/teacher";

export default function FavoritesPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { favorites, toggleFavorite } = useAuth();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const snapshot = await get(ref(db, "/"));

        if (snapshot.exists()) {
          const data = snapshot.val();
          const teachersList: Teacher[] = Array.isArray(data)
            ? data
            : Object.values(data);
            
          setTeachers(teachersList);
        }
      } catch (error) {
        console.error("Помилка при отриманні вчителів:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return <p>Loading favorite teachers...</p>;
  }

  // Фільтруємо список: залишаємо лише тих вчителів, ID яких є у favorites
  const favoriteTeachers = teachers.filter((teacher, index) => {
    const teacherId = String(teacher.id ?? index);
    return favorites.includes(teacherId);
  });

  return (
    <div className="container">
      {favoriteTeachers.length === 0 ? (
        <p>You haven't added any teachers to your favorites yet.</p>
      ) : (
        favoriteTeachers.map((teacher, index) => {
          const teacherId = String(teacher.id ?? index);

          return (
            <TeacherCard
              key={teacherId}
              teacher={teacher}
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(teacherId)}
              onBookLesson={() => {}}
            />
          );
        })
      )}
    </div>
  );
}