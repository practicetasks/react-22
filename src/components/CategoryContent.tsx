import {CategoryUpdateForm} from "./CategoryUpdateForm.tsx";
import {CategoryList} from "./CategoryList.tsx";
import { Modal } from "./Modal.tsx";
import type {Category} from "../types.ts";
import {CategoryCreateForm} from "./CategoryCreateForm.tsx";
import {type Dispatch, type SetStateAction, useState} from "react";

export type CategoryContentProps = {
    categories: Category[],
    setCategories: Dispatch<SetStateAction<Category[]>>
}

export function CategoryContent({categories, setCategories}: CategoryContentProps) {
    const [updatingCategory, setUpdatingCategory] = useState<Category | null>(null);
    const [updatingCategoryValue, setUpdatingCategoryValue] = useState('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Создать категорию</button>
            {isOpen &&
                <Modal onClose={() => setIsOpen(false)}>
                    <CategoryCreateForm categories={categories}
                                        setCategories={(categories: Category[]) => setCategories(categories)}
                                        onClose={() => setIsOpen(false)}
                    />
                </Modal>
            }

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
        </>
    )
}