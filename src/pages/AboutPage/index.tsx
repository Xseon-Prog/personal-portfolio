import avatar from "../../assets/avatar.png";
import { GraduationCap, MapPin } from "lucide-react";
import { capabilities } from "../../data/capabilities";
import { SectionLabel } from "../../components/SectionLabel";

export function AboutPage() {
  return (
    <main className="shell inner-page">
      <SectionLabel number="01">ОБО МНЕ</SectionLabel>

      <div className="inner-hero-grid">
        <div>
          <h1>
            Мои <span className="accent-text">интересы.</span>
          </h1>

          <p className="inner-lead">
            Скурлатов Александр · Проектирование IT-продуктов · Концепции ·
            Дизайн
          </p>

          <p className="body-copy">
            Мне интересно участвовать в проектах на разных этапах — от
            первоначальной идеи и проектирования до презентации и запуска. В
            первую очередь меня привлекают IT-продукты, но мне также интересно
            работать над проектами в других сферах, разбираться в задачах и
            находить способ ясно представить решение команде и аудитории.
          </p>

          <p className="body-copy">
            В командных проектах я занимался разработкой презентаций, визуальным
            оформлением, логотипами и проектированием. Также участвовал в
            обсуждении технической стороны и отдельных задачах развёртывания.
          </p>
        </div>

        <div className="about-profile-card panel">
          <div className="about-avatar">
            <img src={avatar} alt="Аватар Александра" />
          </div>
          <span className="profile-index">PROFILE / 001</span>
          <h3>Скурлатов Александр</h3>
          <p>Идеи · Проектирование · Дизайн</p>

          <div className="profile-location">
            <MapPin size={15} /> Москва, Россия
          </div>
          <div className="profile-line" />
          <div className="profile-status">
            <span className="live-dot" /> Открыт к новым проектам
          </div>
        </div>
      </div>

      <div className="subsection-title">
        <h2>Как я участвую в проектах</h2>
        <span>FOCUS / 05</span>
      </div>

      <div className="capability-grid detail-capabilities">
        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <article
              className={`capability-card ${item.color}`}
              key={item.number}
            >
              <div className="capability-top">
                <span>{item.number} / 05</span>
                <Icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          );
        })}
      </div>

      <div className="education-block">
        <div className="subsection-title">
          <h2>Образование и обучение</h2>
          <GraduationCap size={23} />
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div>
              <span className="timeline-meta">ОБРАЗОВАНИЕ</span>
              <h3>Колледж программирования и кибербезопасности РТУ МИРЭА</h3>
              <p>Среднее профессиональное образование.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot" />
            <div>
              <span className="timeline-meta">КУРСЫ</span>
              <h3>HTML · C++ · Основы Python</h3>
              <p>Курсы по основам веб-разработки и программирования.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot green-dot" />
            <div>
              <span className="timeline-meta">ПОВЫШЕНИЕ КВАЛИФИКАЦИИ</span>
              <h3>Основы 1С</h3>
              <p>Курс повышения квалификации успешно пройден.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
