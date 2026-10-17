import {useState} from "react";
import {CategoryContent} from "./components/CategoryContent.tsx";
import {ProductContent} from "./components/ProductContent.tsx";

export function App() {
    const [isCategoryChosen, setIsCategoryChosen] = useState<boolean>(true);

    return (
        <div>
            <ul>
                <li><a onClick={() => setIsCategoryChosen(true)}>Категорий</a></li>
                <li><a onClick={() => setIsCategoryChosen(false)}>Товары</a></li>
            </ul>

            {isCategoryChosen
                ? <CategoryContent/>
                : <ProductContent/>
            }
        </div>
    )
}

