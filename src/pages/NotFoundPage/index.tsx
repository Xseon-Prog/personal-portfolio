import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function NotFoundPage() {
  return (
    <main className="shell inner-page not-found">
      <span className="not-found-number">404</span>
      <h1>
        Кажется, этой страницы
        <br />
        <span className="accent-text">пока нет.</span>
      </h1>
      <Link to="/" className="button button-primary">
        На главную <ArrowRight size={16} />
      </Link>
    </main>
  );
}
