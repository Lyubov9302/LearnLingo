import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/config";
import type { Teacher } from "../../types/teacher";
import { TeacherCard } from "../../components/TeacherCard/TeacherCard";
import styles from "./TeachersPage.module.css";

export const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const snapshot = await get(ref(db, "teachers"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Перетворюємо масив чи об'єкт з БД
          const list: Teacher[] = Array.isArray(data)
            ? data
            : Object.keys(data).map((key) => ({ id: key, ...data[key] }));
          setTeachers(list);
        }
      } catch (error) {
        console.error("Помилка завантаження викладачів:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  if (isLoading) return <div>Loading teachers...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {teachers.slice(0, visibleCount).map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            isFavorite={false}
            onToggleFavorite={() => {}}
            onBookLesson={() => {}}
          />
        ))}
      </div>

      {visibleCount < teachers.length && (
        <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default TeachersPage;