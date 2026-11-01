import { SectionLabel } from "./SectionLabel";
import { capabilities } from "../data/capabilities";

export function Capabilities() {
  return (
    <section className="section shell capabilities-section">
      <SectionLabel number="01">ЧТО Я ДЕЛАЮ</SectionLabel>

      <div className="section-heading-row">
        <h2>
          Мой <span className="accent-text">план работы.</span>
        </h2>
      </div>

      <div className="capability-grid">
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
    </section>
  );
}
