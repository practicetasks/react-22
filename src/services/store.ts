import {createContext, type Dispatch, type SetStateAction} from "react";
import type {Category} from "../types.ts";

type CategoryContextType = {
    categories: Category[],
    setCategories: Dispatch<SetStateAction<Category[]>>
}

export const CategoryContext = createContext<CategoryContextType | null>(null);
