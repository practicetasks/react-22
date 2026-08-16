import {useEffect, useState} from "react";
import type {Category} from "./types.ts";
import {CategoryContent} from "./components/CategoryContent.tsx";
import {ProductContent} from "./components/ProductContent.tsx";

export function App() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isCategoryChosen, setIsCategoryChosen] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://practicetasks.kz/api/categories')
            .then(resp => resp.json())
            .then((categories: Category[]) => {
                setCategories(categories);
            });
    }, []);

    return (
        <div>
            <ul>
                <li><a onClick={() => setIsCategoryChosen(true)}>Категорий</a></li>
                <li><a onClick={() => setIsCategoryChosen(false)}>Товары</a></li>
            </ul>

            {isCategoryChosen
                ? <CategoryContent categories={categories} setCategories={setCategories}/>
                : <ProductContent/>
            }
        </div>
    )
}

