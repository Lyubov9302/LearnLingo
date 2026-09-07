import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section>
      <div>
        <h1>
          Unlock your potential with the best <span>language</span> tutors
        </h1>
        <p>
          Embark on an Exciting Language Journey with Passionate Language
          Tutors: Your Gateway to Language Proficiency.
        </p>
        <Link to="/teachers">Get started</Link>
      </div>


    </section>
  );
}