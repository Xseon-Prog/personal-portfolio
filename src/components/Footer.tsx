import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link to="/" className="footer-brand">
        AS<span> / 2026</span>
      </Link>
      <a href="https://github.com/Xseon-Prog" target="_blank" rel="noreferrer">
        GitHub <ArrowUpRight size={13} />
      </a>
    </footer>
  );
}
