import {type ReactNode, useState} from "react";
import type {Category} from "../types.ts";
import {CategoryContext} from "../services/store.ts";

export type CategoryProviderProps = {
    children: ReactNode
}

export function CategoryProvider({children}: CategoryProviderProps) {
    const [categories, setCategories] = useState<Category[]>([]);

    return (
        <CategoryContext value={{categories, setCategories}}>
            {children}
        </CategoryContext>
    )
}