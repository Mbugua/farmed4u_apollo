export interface ProductCategoryUpdate {
  title?: string;
  tags?: string;
  is_pbulished?: boolean;
}

export interface ProductCategoryCreate {
  title: string;
  tags?: string; //Array<string>;
  is_published?: boolean;
  created_by: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  tags: string;
  is_published: boolean;
  created_by: string;
}

export interface Product {
  name: string;
  description: string;
  tags: string;
  price: number;
  category_id: ProductCategory;
  id: string;
}

export interface ProductCreate {
  name: string;
  description?: string;
  tags?: string;
  price: number;
  category_id?: ProductCategory;
}

export interface ProductUpdate {
  name: string;
  description?: string;
  tags?: string;
  price?: number;
  category_id?: ProductCategory;
}
