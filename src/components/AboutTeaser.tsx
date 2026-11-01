import { Link } from "react-router-dom";
import { ArrowUpRight, Trophy } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

export function AboutTeaser() {
  const skills = ["1C", "1IDM", "BASH", "SQL", "Python"];

  return (
    <section className="section shell about-teaser">
      <div className="about-teaser-main panel">
        <SectionLabel number="03">НЕМНОГО ОБО МНЕ</SectionLabel>

        <h2>
          Обо <span className="accent-text">мне.</span>
        </h2>

        <p>
          Лучше всего я умею проектировать решение, создавать первую идею,
          готовить материалы, которые помогают команде двигаться в одном
          направлении, а также собирать эту самую команду.
        </p>

        <Link className="text-link" to="/about">
          Подробнее обо мне <ArrowUpRight size={16} />
        </Link>

        <div className="about-scribble">
          THINK
          <br />
          MAKE
          <br />
          <span>SHOW.</span>
        </div>
      </div>

      <div className="about-side">
        <div className="panel skills-panel">
          <SectionLabel number="04">ТЕХНОЛОГИИ</SectionLabel>
          <h3>
            Инструменты,
            <br />с которыми работал.
          </h3>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className={`skill-item skill-${index}`} key={skill}>
                <span className="skill-icon">
                  {skill === "Python" ? "Py" : skill === "BASH" ? "$_" : skill}
                </span>
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <p className="muted-note">
            Навыки отражены по практическому опыту и обучению.
          </p>
        </div>

        <div className="panel mini-award">
          <div className="award-icon">
            <Trophy size={21} />
          </div>

          <div>
            <span className="mini-label">КОМАНДНЫЙ РЕЗУЛЬТАТ</span>
            <h3>2 достижения</h3>
            <p>IT-Планета 2026 · Хакатон «Телеком»</p>
          </div>

          <Link to="/achievements" aria-label="Все достижения">
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
