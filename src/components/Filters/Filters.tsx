import styles from './Filters.module.css';

interface FiltersProps {
  selectedLanguage: string;
  selectedLevel: string;
  selectedPrice: string;
  onLanguageChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

const LANGUAGES = ["French", "English", "German", "Spanish", "Mandarin Chinese", "Italian", "Vietnamese"];
const LEVELS = ["A1 Beginner", "A2 Elementary", "B1 Intermediate", "B2 Upper-Intermediate", "C1 Advanced", "C2 Proficient"];
const PRICES = ["10", "20", "30", "40"];

export const Filters = ({
  selectedLanguage,
  selectedLevel,
  selectedPrice,
  onLanguageChange,
  onLevelChange,
  onPriceChange,
}: FiltersProps) => {
  return (
    <div className={styles.filtersContainer}>
      {/* Фільтр за мовою */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Languages</label>
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className={styles.select}
        >
          <option value="">Show all</option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>


      <div className={styles.filterGroup}>
        <label className={styles.label}>Level</label>
        <select
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value)}
          className={styles.select}
        >
          <option value="">Show all</option>
          {LEVELS.map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>
      </div>

      {/* Фільтр за ціною */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Price</label>
        <select
          value={selectedPrice}
          onChange={(e) => onPriceChange(e.target.value)}
          className={styles.select}
        >
          <option value="">Show all</option>
          {PRICES.map((price) => (
            <option key={price} value={price}>
              {price} $
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};