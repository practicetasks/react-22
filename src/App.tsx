import {useState} from "react";
import type {Category} from "./types.ts";
import {CategoryCreateForm} from "./components/CategoryCreateForm.tsx";
import {CategoryList} from "./components/CategoryList.tsx";
import {CategoryUpdateForm} from "./components/CategoryUpdateForm.tsx";

export function App() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [updatingCategory, setUpdatingCategory] = useState<Category | null>(null);
    const [updatingCategoryValue, setUpdatingCategoryValue] = useState('');

    return (
        <div>
            <CategoryCreateForm categories={categories}
                                setCategories={(categories: Category[]) => setCategories(categories)}/>
            <CategoryList categories={categories}
                          setUpdatingCategory={(category: Category) => {
                              setUpdatingCategory(category)
                              setUpdatingCategoryValue(category.name)
                          }}/>
            <CategoryUpdateForm
                categories={categories}
                updatingCategory={updatingCategory}
                setCategories={setCategories}
                setUpdatingCategory={setUpdatingCategory}
                setUpdatingCategoryValue={setUpdatingCategoryValue}
                updatingCategoryValue={updatingCategoryValue}
            />
        </div>
    )
}

