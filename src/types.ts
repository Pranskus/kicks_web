export interface Shoe {
  id: number;
  img: string;
  name: string;
  price: string;
  tag?: string; // Make tag optional
}

export interface CartItem {
  id: number;
  cartItemId: string;
  name: string;
  img: string;
  price: number; // Change to number for calculations
  size: string;
  color?: string;
  category?: string;
}

export interface Category {
  gender: string;
  category: string;
}

export interface Product {
  id: number;
  name: string;
  img: string;
  price: string;
  category?: string;
  color?: string;
  size?: string;
}
