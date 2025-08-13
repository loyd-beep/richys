export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: string[];
  featured?: boolean;
}