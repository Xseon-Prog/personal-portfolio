import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../../types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <Link
        to={`/projects/${project.slug}`}
        className="project-cover-link"
        aria-label={`Подробнее о проекте ${project.title}`}
      >
        <div className="project-cover">
          <img
            src={project.cardCover ?? project.cover}
            alt={`Визуализация проекта ${project.title}`}
          />
          <span className="cover-number">PROJECT / {project.number}</span>
          <span className="cover-open">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </Link>

      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>

        <h3>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>

        <div className="tag-list">
          {project.tags.slice(0, 3).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card-footer">
          <Link className="text-link" to={`/projects/${project.slug}`}>
            Посмотреть кейс <ArrowUpRight size={16} />
          </Link>

          {project.links.length > 0 && (
            <a
              className="icon-link"
              target="_blank"
              rel="noreferrer"
              href={project.links[0].href}
              aria-label={`Открыть репозиторий ${project.title}`}
            >
              <Github size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
