type ItemCategory = "appetizer" | "entree" | "drinks" | "dessert"

export type MenuItem = {
    id: number,
    category: ItemCategory,
    sub_category?: string,
    name: string,
    price: number
  }