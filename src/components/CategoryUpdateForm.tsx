import type {Category} from "../types.ts";
import * as React from "react";
import {type Dispatch, type SetStateAction, useContext, useState} from "react";
import {CategoryContext} from "../services/store.ts";

export type CategoryUpdateFormProps = {
    updatingCategory: Category | null,
    updatingCategoryValue: string,
    setUpdatingCategoryValue: Dispatch<SetStateAction<string>>,
    setUpdatingCategory: Dispatch<SetStateAction<Category | null>>,
}

export function CategoryUpdateForm(
    {
        updatingCategory,
        setUpdatingCategoryValue,
        setUpdatingCategory,
        updatingCategoryValue
    }: CategoryUpdateFormProps
) {
    const [isCategoryNameTaken, setIsCategoryNameTaken] = useState(false);
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('CategoryContext не настроено');
    }

    const {categories, setCategories} = context;

    function handleUpdate(e: React.SubmitEvent) {
        e.preventDefault()
        if (!updatingCategory || !updatingCategoryValue.trim()) return;

        const normalizedCategoryName = updatingCategoryValue.trim().toLocaleLowerCase();
        const nameIsTaken = categories.some(
            category => category.id !== updatingCategory.id
                && category.name.trim().toLocaleLowerCase() === normalizedCategoryName
        );
        setIsCategoryNameTaken(nameIsTaken);
        if (nameIsTaken) return;

        setCategories(categories.map(category => category.id === updatingCategory.id
            ? {...updatingCategory, name: updatingCategoryValue.trim()}
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
                           onChange={e => {
                               setUpdatingCategoryValue(e.target.value);
                               setIsCategoryNameTaken(false);
                           }}/>
                    {isCategoryNameTaken && <p role="alert">Такое название уже занято</p>}
                    <button disabled={!updatingCategoryValue.trim()}>Обновить</button>
                </form>
            )}
        </>
    )
}
