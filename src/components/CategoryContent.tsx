import {CategoryUpdateForm} from "./CategoryUpdateForm.tsx";
import {CategoryList} from "./CategoryList.tsx";
import { Modal } from "./Modal.tsx";
import type {Category} from "../types.ts";
import {CategoryCreateForm} from "./CategoryCreateForm.tsx";
import {useContext, useState} from "react";
import {CategoryContext} from "../services/store.ts";

export function CategoryContent() {
    const context = useContext(CategoryContext);
    const [updatingCategory, setUpdatingCategory] = useState<Category | null>(null);
    const [updatingCategoryValue, setUpdatingCategoryValue] = useState('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (!context) {
        throw new Error('CategoryContext не настроено');
    }

    const {setCategories} = context;

    function handleDeleteCategory(category: Category) {
        setCategories(categories => categories.filter(item => item.id !== category.id));

        if (updatingCategory?.id === category.id) {
            setUpdatingCategory(null);
            setUpdatingCategoryValue('');
        }
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Создать категорию</button>
            {isOpen &&
                <Modal onClose={() => setIsOpen(false)}>
                    <CategoryCreateForm onClose={() => setIsOpen(false)}/>
                </Modal>
            }

            <CategoryList setUpdatingCategory={(category: Category) => {
                              setUpdatingCategory(category)
                              setUpdatingCategoryValue(category.name)
                          }} onDeleteCategory={handleDeleteCategory}/>
            {updatingCategory &&
                <Modal onClose={() => {
                    setUpdatingCategory(null);
                    setUpdatingCategoryValue('');
                }}>
                    <CategoryUpdateForm
                        updatingCategory={updatingCategory}
                        setUpdatingCategory={setUpdatingCategory}
                        setUpdatingCategoryValue={setUpdatingCategoryValue}
                        updatingCategoryValue={updatingCategoryValue}
                    />
                </Modal>
            }
        </>
    )
}
