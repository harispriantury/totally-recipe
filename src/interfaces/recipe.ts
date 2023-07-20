export interface IHits {
  recipe: IRecipe;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface IRecipe {
  label: string;
  image: string;
  calories: number;
  totalWeight: number;
  images: {
    LARGE: {
      url: string;
    };
    REGULAR: {
      url: string;
    };
  };
  ingredientLines: string[];
}
