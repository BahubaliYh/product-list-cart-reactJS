export interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Product {
  id:string;
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}