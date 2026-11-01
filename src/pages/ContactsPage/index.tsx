import {
  ArrowUpRight,
  Briefcase,
  Github,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import avatar from "../../assets/avatar.png";
import { SectionLabel } from "../../components/SectionLabel";

export function ContactsPage() {
  const contacts = [
    {
      label: "ЭЛЕКТРОННАЯ ПОЧТА",
      value: "skurlatov.aleksandr2@gmail.com",
      href: "mailto:skurlatov.aleksandr2@gmail.com",
      icon: Mail,
      color: "pink",
    },
    {
      label: "TELEGRAM",
      value: "@What338",
      href: "https://t.me/What338",
      icon: Send,
      color: "blue",
    },
    {
      label: "GITHUB",
      value: "Xseon-Prog",
      href: "https://github.com/Xseon-Prog",
      icon: Github,
      color: "green",
    },
  ];

  return (
    <main className="shell inner-page contacts-page">
      <SectionLabel number="01">КОНТАКТЫ</SectionLabel>

      <div className="section-heading-row inner-heading-row">
        <h1>
          Есть идея?
          <br />
          <span className="accent-text">Обсудим.</span>
        </h1>
      </div>

      <div className="contacts-layout">
        <div className="contact-list">
          {contacts.map((item) => {
            const Icon = item.icon;
            const isExternal = !item.href.startsWith("mailto:");

            return (
              <a
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`contact-item panel ${item.color}`}
                key={item.label}
              >
                <span className="contact-icon">
                  <Icon size={21} />
                </span>

                <span className="contact-copy">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </span>

                <ArrowUpRight size={18} className="contact-arrow" />
              </a>
            );
          })}
        </div>

        <div className="contact-info panel">
          <div className="contact-info-glow" />
          <div className="contact-info-avatar">
            <img src={avatar} alt="Аватар Александра" />
          </div>

          <span className="mini-label">НА СВЯЗИ</span>
          <h2>
            Скурлатов
            <br />
            Александр
          </h2>

          <div className="contact-location">
            <MapPin size={16} /> Москва, Россия
          </div>
          <div className="contact-location">
            <Briefcase size={16} /> Удалённо / гибрид / офис
          </div>

          <div className="availability">
            <span className="live-dot" /> Рассматриваю предложения
          </div>
        </div>
      </div>
    </main>
  );
}
