import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { projectFilters, type ProjectFilter } from "../data/projectFilters";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";

export function FeaturedProjects({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState<ProjectFilter>("Все");

  const filteredProjects = full
    ? projects.filter((project) => {
        if (filter === "Все") return true;
        if (filter === "Боты") return project.slug === "office-bot";
        if (filter === "Дизайн") return project.tags.includes("Дизайн");

        return (
          project.tags.includes("Концепция") || project.tags.includes("Идея")
        );
      })
    : projects;

  return (
    <section
      className={`section shell projects-section ${
        full ? "projects-page-section" : ""
      }`}
    >
      <SectionLabel number="02">ИЗБРАННЫЕ РАБОТЫ</SectionLabel>

      <div className="section-heading-row">
        <h2>
          {full ? (
            <>
              Мои <span className="accent-text">проекты.</span>
            </>
          ) : (
            <>
              Любимые <span className="accent-text">проекты.</span>
            </>
          )}
        </h2>

        {!full && (
          <div className="projects-aside">
            <Link className="text-link" to="/projects">
              Все проекты <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>

      {full && (
        <div className="filter-row" role="group" aria-label="Фильтр проектов">
          {projectFilters.map((value) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`filter-chip ${filter === value ? "selected" : ""}`}
              aria-pressed={filter === value}
            >
              {filter === value && <span className="filter-dot" />}
              {value}
            </button>
          ))}
        </div>
      )}

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>

      {!full && (
        <div className="all-projects-mobile">
          <Link to="/projects" className="button button-ghost">
            Все проекты <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
}
