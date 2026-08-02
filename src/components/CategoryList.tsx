import type {Category} from "../types.ts";

export type CategoryListProps = {
    categories: Category[],
    setUpdatingCategory: (category: Category) => void
}

export function CategoryList({categories, setUpdatingCategory}: CategoryListProps) {
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
                        <button>Удалить</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}