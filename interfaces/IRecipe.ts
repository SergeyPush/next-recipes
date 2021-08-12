import { Document } from "@contentful/rich-text-types";
import { IImage } from "./IImage";

export interface IRecipe {
  description: Document;
  image: IImage;
  ingredients: Document;
  name: string;
  price: number;
  rating: number;
  slug: string;
  subtitle: string;
  tags: [string];
  time: number;
}
