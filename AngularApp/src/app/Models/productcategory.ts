import { Product } from "./product";

export interface Productcategory {
    productCategoryID: number;
    name: string;
    products?: Product[];
}
