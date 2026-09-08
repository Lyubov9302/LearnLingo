import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={css.home}>
      <section className={css.hero}>
        <div className={css.heroContent}>
          <h1 className={css.title}>
            Unlock your potential with the best{" "}
            <span className={css.accent}>language</span> tutors
          </h1>

          <p className={css.text}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>

          <Link to="/teachers" className={css.getStartedLink}>
            Get started
          </Link>
        </div>

        <div className={css.heroImageBox}>
          <img
            className={css.heroImage}
            src="/hero-avatar.png"
            alt="Teacher with laptop"
          />
        </div>
      </section>

      <section className={css.stats}>
        <ul className={css.statsList}>
          <li className={css.statItem}>
            <strong>32,000 +</strong>
            <span>Experienced tutors</span>
          </li>
          <li className={css.statItem}>
            <strong>300,000 +</strong>
            <span>5-star tutor reviews</span>
          </li>
          <li className={css.statItem}>
            <strong>120 +</strong>
            <span>Subjects taught</span>
          </li>
          <li className={css.statItem}>
            <strong>200 +</strong>
            <span>Tutor nationalities</span>
          </li>
        </ul>
      </section>
    </main>
  );
}