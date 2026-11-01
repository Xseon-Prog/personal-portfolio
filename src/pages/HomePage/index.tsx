import { Hero } from "../../components/Hero";
import { Capabilities } from "../../components/Capabilities";
import { FeaturedProjects } from "../../components/FeaturedProjects";
import { AboutTeaser } from "../../components/AboutTeaser";
import { ContactBanner } from "../../components/ContactBanner";

export function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <AboutTeaser />
      <ContactBanner />
    </>
  );
}
