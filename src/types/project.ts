export type Project = {
  cardCover?: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  cover: string;
  accent: string;
  summary: string;
  role: string[];
  details: string[];
  outcome: string;
  links: { label: string; href: string }[];
  tags: string[];
};
