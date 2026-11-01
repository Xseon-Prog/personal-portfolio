import type { ReactNode } from "react";
import { Header } from "../Navigation/Header";
import { Footer } from "../Footer";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
