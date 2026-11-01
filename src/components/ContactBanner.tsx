import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ContactBanner() {
  return (
    <section className="shell contact-banner">
      <div className="contact-banner-glow" />

      <div className="contact-banner-copy">
        <span className="eyebrow">
          <span className="live-dot" /> ЕСТЬ ИДЕЯ?
        </span>

        <h2>
          Давай создадим
          <br />
          <span className="accent-text">что-то значимое.</span>
        </h2>
      </div>

      <div className="contact-banner-actions">
        <a
          href="mailto:skurlatov.aleksandr2@gmail.com"
          className="button button-primary"
        >
          Написать мне <ArrowUpRight size={17} />
        </a>
        <Link to="/contacts" className="button button-ghost">
          Все контакты <ArrowRight size={16} />
        </Link>
      </div>

      <div className="contact-banner-orbit">AS</div>
    </section>
  );
}
