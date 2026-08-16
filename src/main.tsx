import {createRoot} from 'react-dom/client'
import './index.css'
// import {HttpApp} from "./HttpApp.tsx";
import {App} from "./App.tsx";

const root = createRoot(document.getElementById('root')!);

root.render(<App/>);
// root.render(<HttpApp />);

// доработка из add-http
