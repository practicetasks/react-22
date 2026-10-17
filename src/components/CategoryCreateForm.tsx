import {useContext, useState} from "react";
import {CategoryContext} from "../services/store.ts";

export type CategoryCreateFormProps = {
    onClose: () => void
}

export function CategoryCreateForm({onClose}: CategoryCreateFormProps) {
    const context = useContext(CategoryContext);
    const [categoryName, setCategoryName] = useState('');
    const [isCategoryNameTaken, setIsCategoryNameTaken] = useState(false);

    if (!context) {
        throw new Error('CategoryContext не настроено');
    }

    const {categories, setCategories} = context;

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        if (!categoryName.trim()) return;

        const normalizedCategoryName = categoryName.trim().toLocaleLowerCase();
        const nameIsTaken = categories.some(
            category => category.name.trim().toLocaleLowerCase() === normalizedCategoryName
        );
        setIsCategoryNameTaken(nameIsTaken);
        if (nameIsTaken) return;

        setCategories([...categories, {id: crypto.randomUUID(), name: categoryName.trim()}]);

        setCategoryName('');
        onClose();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                   value={categoryName}
                   onChange={(e) => {
                       setCategoryName(e.target.value);
                       setIsCategoryNameTaken(false);
                   }}
                   placeholder={'Введите название категорий'}
            />
            {isCategoryNameTaken && <p role="alert">Такое название уже занято</p>}
            <button disabled={!categoryName.trim()}>Сохранить</button>
        </form>
    )
}
