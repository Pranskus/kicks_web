export interface Product {
  id: number;
  name: string;
  img: string;
  price: string;
}

export interface CartItem {
  id: number;
  name: string;
  img: string;
  price: number;
  size?: string;
  color?: string;
  category?: string;
  cartItemId: string;
}

export interface Category {
  gender: string;
  category: string;
}

export interface Shoe extends Product {
  tag?: string;
}
