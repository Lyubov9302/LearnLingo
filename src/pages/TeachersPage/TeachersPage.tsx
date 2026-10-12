import { useState, useEffect, useMemo } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/config";
import { Filters } from "../../components/Filters/Filters";
import { TeacherCard } from "../../components/TeacherCard/TeacherCard";
import { useAuth } from "../../components/hooks/useAuth";
import type { Teacher } from "../../types/teacher";
import styles from "./TeachersPage.module.css";

const ITEMS_PER_PAGE = 4;

const TeachersPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  // Отримуємо статус авторизації, список обраних та функцію з контексту
  const { isLoggedIn, favorites, toggleFavorite } = useAuth();

  // Стани фільтрів
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersRef = ref(db, "/");
        const snapshot = await get(teachersRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const teachersList: Teacher[] = Array.isArray(data)
            ? data.filter(Boolean)
            : Object.values(data);
          setTeachers(teachersList);
        } else {
          setTeachers([]);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  // Перевірка при кліку на сердечко
  const handleToggleFavorite = (teacherId: string) => {
    if (!isLoggedIn) {
      alert("Будь ласка, увійдіть у систему, щоб додати викладача до улюблених!");
      // Тут за бажанням можна викликати відкриття модалки логіну
      return;
    }
    toggleFavorite(teacherId);
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLevelChange = (value: string) => {
    setSelectedLevel(value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handlePriceChange = (value: string) => {
    setSelectedPrice(value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesLanguage = selectedLanguage
        ? teacher.languages?.includes(selectedLanguage)
        : true;
      const matchesLevel = selectedLevel
        ? teacher.levels?.includes(selectedLevel)
        : true;
      const matchesPrice = selectedPrice
        ? teacher.price_per_hour <= Number(selectedPrice)
        : true;

      return matchesLanguage && matchesLevel && matchesPrice;
    });
  }, [teachers, selectedLanguage, selectedLevel, selectedPrice]);

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  if (loading) {
    return <div className={styles.loader}>Loading teachers...</div>;
  }

  return (
    <div className={styles.container}>
      <Filters
        selectedLanguage={selectedLanguage}
        selectedLevel={selectedLevel}
        selectedPrice={selectedPrice}
        onLanguageChange={handleLanguageChange}
        onLevelChange={handleLevelChange}
        onPriceChange={handlePriceChange}
      />

      <div className={styles.teachersList}>
        {visibleTeachers.length > 0 ? (
          visibleTeachers.map((teacher, index) => {
            const teacherId = teacher.id || `${teacher.name}-${teacher.surname}-${index}`;
            const isFav = favorites.includes(teacherId);

            return (
              <TeacherCard
                key={teacherId}
                teacher={teacher}
                isFavorite={isFav}
                onToggleFavorite={() => handleToggleFavorite(teacherId)}
                onBookLesson={(t) => {
                  console.log("Book lesson:", t);
                }}
              />
            );
          })
        ) : (
          <p className={styles.noResults}>No teachers found for your request.</p>
        )}
      </div>

      {visibleCount < filteredTeachers.length && (
        <button
          type="button"
          onClick={handleLoadMore}
          className={styles.loadMoreBtn}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default TeachersPage;