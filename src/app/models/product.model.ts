// Doit correspondre à votre entité Java Product
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

// Doit correspondre à votre entité Java Order
export interface Order {
  id?: number;
  fullName: string;
  phone: string;
  address: string;
  items?: CartItem[];
  total: number;
  createdAt?: Date;
}