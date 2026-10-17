import {createRoot} from 'react-dom/client'
import './index.css'
import {CategoryProvider} from "./provider/CategoryProvider.tsx";
import {App} from "./App.tsx";

const root = createRoot(document.getElementById('root')!);

root.render(
    <CategoryProvider>
        <App/>
    </CategoryProvider>
);
