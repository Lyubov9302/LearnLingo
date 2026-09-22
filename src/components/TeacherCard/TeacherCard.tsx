import { useState } from "react";
import { FiHeart, FiStar, FiBookOpen } from "react-icons/fi";
import type { Teacher } from "../../types/teacher";
import styles from "./TeacherCard.module.css";

interface TeacherCardProps {
  teacher: Teacher;
  isFavorite: boolean;
  onToggleFavorite: (teacherId: string) => void;
  onBookLesson: (teacher: Teacher) => void;
}

export const TeacherCard = ({
  teacher,
  isFavorite,
  onToggleFavorite,
  onBookLesson,
}: TeacherCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className={styles.avatar}
        />
        <div className={styles.onlineStatus} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Languages</p>
            <h3 className={styles.name}>
              {teacher.name} {teacher.surname}
            </h3>
          </div>

          <div className={styles.statsGroup}>
            <span className={styles.statItem}>
              <FiBookOpen size={16} /> Lessons online
            </span>
            <span className={styles.divider}>|</span>
            <span className={styles.statItem}>
              Lessons done: {teacher.lessons_done}
            </span>
            <span className={styles.divider}>|</span>
            <span className={styles.statItem}>
              <FiStar size={16} className={styles.starIcon} /> Rating:{" "}
              {teacher.rating}
            </span>
            <span className={styles.divider}>|</span>
            <span className={styles.statItem}>
              Price / 1 hour:{" "}
              <span className={styles.price}>{teacher.price_per_hour}$</span>
            </span>

            <button
              type="button"
              className={styles.favoriteBtn}
              onClick={() => onToggleFavorite(teacher.id)}
              aria-label="Add to favorites"
            >
              <FiHeart
                size={26}
                className={isFavorite ? styles.heartActive : styles.heartDefault}
              />
            </button>
          </div>
        </div>

        <ul className={styles.detailsList}>
          <li>
            <span className={styles.detailTitle}>Speaks: </span>
            <span className={styles.underlined}>
              {teacher.languages.join(", ")}
            </span>
          </li>
          <li>
            <span className={styles.detailTitle}>Lesson Info: </span>
            {teacher.lesson_info}
          </li>
          <li>
            <span className={styles.detailTitle}>Conditions: </span>
            {teacher.conditions.join(" ")}
          </li>
        </ul>

        {!isExpanded && (
          <button
            type="button"
            className={styles.readMoreBtn}
            onClick={() => setIsExpanded(true)}
          >
            Read more
          </button>
        )}

        {isExpanded && (
          <div className={styles.expandedContent}>
            <p className={styles.experience}>{teacher.experience}</p>

            <ul className={styles.reviewsList}>
              {teacher.reviews.map((review, idx) => (
                <li key={idx} className={styles.reviewItem}>
                  <div className={styles.reviewerHeader}>
                    <div className={styles.reviewerAvatar}>
                      {review.reviewer_name[0]}
                    </div>
                    <div>
                      <p className={styles.reviewerName}>
                        {review.reviewer_name}
                      </p>
                      <p className={styles.reviewerRating}>
                        <FiStar size={14} className={styles.starIcon} />{" "}
                        {review.reviewer_rating}.0
                      </p>
                    </div>
                  </div>
                  <p className={styles.comment}>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.levelsList}>
          {teacher.levels.map((level) => (
            <span key={level} className={styles.levelBadge}>
              #{level}
            </span>
          ))}
        </div>

        {isExpanded && (
          <button
            type="button"
            className={styles.bookBtn}
            onClick={() => onBookLesson(teacher)}
          >
            Book trial lesson
          </button>
        )}
      </div>
    </div>
  );
};