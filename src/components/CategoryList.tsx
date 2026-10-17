import type {Category} from "../types.ts";
import {useContext} from "react";
import {CategoryContext} from "../services/store.ts";

export type CategoryListProps = {
    setUpdatingCategory: (category: Category) => void
    onDeleteCategory: (category: Category) => void
}

export function CategoryList({setUpdatingCategory, onDeleteCategory}: CategoryListProps) {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('CategoryContext не настроено');
    }

    const {categories} = context;
    return (
        <table>
            <thead>
            <tr>
                <th>Название</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => (
                <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>
                        <button onClick={()=> setUpdatingCategory(category)}>Обновить</button>
                        <button onClick={() => onDeleteCategory(category)}>Удалить</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
