export interface CategoriesProps {
  categories: string[];
  categoryImages: Record<string, string>;
  setSelectedCategory: (category: string) => void;
}
