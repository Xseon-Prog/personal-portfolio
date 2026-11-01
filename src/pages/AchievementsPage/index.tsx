import { Award, Sparkles, Trophy } from "lucide-react";
import { SectionLabel } from "../../components/SectionLabel";

export function AchievementsPage() {
  const achievements = [
    {
      no: "01",
      title: "Международная олимпиада «IT-Планета 2026»",
      project: "MoscowRealtime",
      result: "8-е место по баллам; 11-е место команды в итоговом отборе.",
      desc: "Командный проект мобильного приложения для цифрового городского туризма.",
      icon: Trophy,
      color: "blue",
    },
    {
      no: "02",
      title: "Хакатон «Телеком»",
      project: "«Антифрод без прослушки»",
      result: "3-е место.",
      desc: "Концепция решения для выявления подозрительных звонков без прослушивания разговоров.",
      icon: Award,
      color: "pink",
    },
  ];

  return (
    <main className="shell inner-page">
      <SectionLabel number="01">ДОСТИЖЕНИЯ</SectionLabel>

      <div className="section-heading-row inner-heading-row">
        <h1>
          Результат —
          <br />
          <span className="accent-text">это командная работа.</span>
        </h1>
      </div>

      <div className="achievement-grid">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <article
              className={`achievement-card panel ${item.color}`}
              key={item.no}
            >
              <div className="achievement-top">
                <span>{item.no} / ACHIEVEMENT</span>
                <Icon size={23} />
              </div>

              <h2>{item.title}</h2>
              <span className="achievement-project">{item.project}</span>
              <p>{item.desc}</p>

              <div className="achievement-result">
                <Trophy size={18} />
                <strong>{item.result}</strong>
              </div>
            </article>
          );
        })}
      </div>

      <div className="achievement-footer panel">
        <Sparkles size={22} />
        <p>
          В конкурсных проектах я участвовал в формировании идеи,
          проектировании, визуальном оформлении и подготовке презентации
          решения.
        </p>
      </div>
    </main>
  );
}
