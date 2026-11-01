import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Check,
  ExternalLink,
} from "lucide-react";
import { projects } from "../../data/projects";
import { SectionLabel } from "../../components/SectionLabel";
import { NotFoundPage } from "../NotFoundPage";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <main className="shell inner-page project-detail-page">
      <Link to="/projects" className="back-link">
        <ArrowLeft size={16} /> Назад к проектам
      </Link>

      <SectionLabel number={`PROJECT / ${project.number}`}>
        {project.category.toUpperCase()}
      </SectionLabel>

      <div className="detail-hero-grid">
        <div className="detail-intro">
          <h1>{project.title}</h1>
          <p className="inner-lead">{project.subtitle}</p>
          <p className="body-copy">{project.summary}</p>

          <div className="tag-list detail-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="detail-actions">
            {project.links.map((link) => (
              <a
                className="button button-primary"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.href}
              >
                {link.label} <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="detail-cover">
          <img src={project.cover} alt={`Иллюстрация ${project.title}`} />
          <span className="detail-cover-mark">
            {project.number} / CASE STUDY
          </span>
        </div>
      </div>

      <div className="detail-content-grid">
        <section className="detail-copy panel">
          <SectionLabel number="01">О ПРОЕКТЕ</SectionLabel>

          {project.details.map((paragraph, index) => (
            <p className="body-copy" key={index}>
              {paragraph}
            </p>
          ))}

          <div className="outcome-box">
            <Award size={22} />
            <div>
              <span>РЕЗУЛЬТАТ</span>
              <p>{project.outcome}</p>
            </div>
          </div>
        </section>

        <aside className="detail-role panel">
          <SectionLabel number="02">МОЙ ВКЛАД</SectionLabel>
          <ul>
            {project.role.map((item) => (
              <li key={item}>
                <Check size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="detail-divider" />
          <SectionLabel number="03">ТЕМЫ</SectionLabel>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="detail-bottom-nav">
        <Link to="/projects" className="text-link">
          <ArrowLeft size={16} /> Все проекты
        </Link>
        <Link to="/contacts" className="text-link">
          Обсудить проект <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
