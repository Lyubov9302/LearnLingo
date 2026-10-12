import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiX } from "react-icons/fi";
import {
  bookLessonSchema,
  type BookLessonFormData,
} from "../../schemas/bookLessonSchema";
import type { Teacher } from "../../types/teacher";
import styles from "./BookLessonModal.module.css";

interface BookLessonModalProps {
  teacher: Teacher;
  onClose: () => void;
}

const REASONS = [
  "Career and business",
  "Lesson for kids",
  "Living abroad",
  "Exams and coursework",
  "Culture, travel or hobby",
] as const;

export const BookLessonModal = ({ teacher, onClose }: BookLessonModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookLessonFormData>({
    resolver: yupResolver(bookLessonSchema),
    defaultValues: {
      reason: "Career and business",
    },
  });

  const onSubmit = (data: BookLessonFormData) => {
    console.log("Booking data submitted:", { teacherId: teacher.id, ...data });
    alert("Trial lesson booked successfully!");
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <FiX size={24} />
        </button>

        <h2 className={styles.title}>Book trial lesson</h2>
        <p className={styles.description}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className={styles.teacherInfo}>
          <img
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
            className={styles.avatar}
          />
          <div>
            <span className={styles.teacherLabel}>Your teacher</span>
            <p className={styles.teacherName}>
              {teacher.name} {teacher.surname}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <p className={styles.radioGroupTitle}>
            What is your main reason for learning English?
          </p>

          <div className={styles.radioGroup}>
            {REASONS.map((reason) => (
              <label key={reason} className={styles.radioLabel}>
                <input
                  type="radio"
                  value={reason}
                  {...register("reason")}
                  className={styles.radioInput}
                />
                <span className={styles.radioCustom} />
                {reason}
              </label>
            ))}
          </div>

          <div className={styles.inputsGroup}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
              className={styles.input}
            />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName.message}</span>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={styles.input}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}

            <input
              type="tel"
              placeholder="Phone number"
              {...register("phone")}
              className={styles.input}
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone.message}</span>
            )}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Book
          </button>
        </form>
      </div>
    </div>
  );
};