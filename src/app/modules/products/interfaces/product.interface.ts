export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // (Mexican peso)
  grammage: number; // (miligrams: mg)
  discount: number; // (percentage)
  imgUrl: string;
}
