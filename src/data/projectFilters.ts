export const projectFilters = ["Все", "Концепции", "Дизайн", "Боты"] as const;

export type ProjectFilter = (typeof projectFilters)[number];
