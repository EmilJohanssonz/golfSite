export interface ProductsProps {
  selectedCategory: string | null;
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  productTypes: string[];
  filteredProducts: {
    [x: string]: string;
    name: string;
    price: string;
    image: string;
  }[];
  addToCart: (product: {
    name: string;
    price: string;
    priceValue: number;
  }) => void;
  setSelectedCategory: (category: string | null) => void; 
}
