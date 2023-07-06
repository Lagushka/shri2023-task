import ReactDOM from 'react-dom/client'
import Main from './components/Main';
import { Header } from './components/Header';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Header />
        <Main />
    </>
);
