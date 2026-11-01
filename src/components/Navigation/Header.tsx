import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "../../data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header shell">
      <Link to="/" className="brand" aria-label="Скурлатов Александр — главная">
        <span className="brand-mark">
          A<span>S</span>
        </span>
        <span className="brand-caption">
          PORTFOLIO <i> / 2026</i>
        </span>
      </Link>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav
        className={`navigation ${menuOpen ? "navigation-open" : ""}`}
        aria-label="Основная навигация"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a
        className="header-contact"
        href="mailto:skurlatov.aleksandr2@gmail.com"
      >
        Связаться <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
