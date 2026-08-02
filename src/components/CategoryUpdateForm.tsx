import type {Category} from "../types.ts";
import * as React from "react";
import type {Dispatch, SetStateAction} from "react";

export type CategoryUpdateFormProps = {
    categories: Category[],
    updatingCategory: Category | null,
    setCategories: Dispatch<SetStateAction<Category[]>>,
    updatingCategoryValue: string,
    setUpdatingCategoryValue: Dispatch<SetStateAction<string>>,
    setUpdatingCategory: Dispatch<SetStateAction<Category | null>>,
}

export function CategoryUpdateForm(
    {
        categories,
        updatingCategory,
        setCategories,
        setUpdatingCategoryValue,
        setUpdatingCategory,
        updatingCategoryValue
    }: CategoryUpdateFormProps
) {
    function handleUpdate(e: React.SubmitEvent) {
        e.preventDefault()
        if (!updatingCategory) return;

        setCategories(categories.map(category => category.id === updatingCategory.id
            ? {...updatingCategory, name: updatingCategoryValue}
            : category
        ));

        setUpdatingCategoryValue('');
        setUpdatingCategory(null);
    }

    return (
        <>
            {updatingCategory && (
                <form onSubmit={handleUpdate}>
                    <input value={updatingCategoryValue}
                           onChange={e => setUpdatingCategoryValue(e.target.value)}/>
                    <button>Обновить</button>
                </form>
            )}
        </>
    )
}