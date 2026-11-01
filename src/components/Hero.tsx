import {
  Asterisk,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

export function Hero() {
  return (
    <section className="hero panel shell">
      <div className="hero-grid-glow" />

      <div className="hero-copy">
        <div className="eyebrow">
          <span className="live-dot" /> ИДЕИ → КОНЦЕПЦИИ → ПРОДУКТЫ
        </div>

        <h1>
          Привет, я
          <br />
          <span className="hero-name">
            Скурлатов
            <br className="name-break" /> Александр
            <span className="cursor">_</span>
          </span>
        </h1>

        <p className="hero-subtitle">
          Проектирование IT-продуктов <i>·</i>
          <br className="mobile-break" /> Концепции <i>·</i> Дизайн
        </p>

        <p className="hero-description">
          Мне интересны проекты в разных сферах, особенно IT: придумываю идеи,
          проектирую решения, создаю презентации и визуальный стиль, участвую в
          подготовке проектов к запуску.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">
            Смотреть проекты <ArrowRight size={17} />
          </Link>
          <Link className="button button-ghost" to="/about">
            Обо мне <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <strong>03</strong>
            <span>проекта</span>
          </div>
          <div>
            <strong>02</strong>
            <span>достижения</span>
          </div>
          <div>
            <strong>05</strong>
            <span>технологий</span>
          </div>
          <div>
            <strong className="stat-symbol">∞</strong>
            <span>идеи</span>
          </div>
        </div>
      </div>

      <div className="hero-art" aria-label="Аватар Александра">
        <div className="art-grid" />
        <div className="art-circle art-circle-one" />
        <div className="art-circle art-circle-two" />

        <div className="avatar-frame">
          <img src={avatar} alt="Неоновый аватар Александра" />
        </div>

        <div className="avatar-ornament ornament-sparkle" aria-hidden="true">
          <Sparkles size={31} strokeWidth={1.8} />
        </div>
        <div className="avatar-ornament ornament-asterisk" aria-hidden="true">
          <Asterisk size={38} strokeWidth={1.8} />
        </div>
        <div className="avatar-ornament ornament-arrow" aria-hidden="true">
          <ArrowUpRight size={30} strokeWidth={1.8} />
        </div>
        <div className="avatar-ornament ornament-plus" aria-hidden="true">
          <Plus size={31} strokeWidth={1.8} />
        </div>
        <span className="avatar-ornament ornament-dot" aria-hidden="true">
          <span />
        </span>
      </div>
    </section>
  );
}
