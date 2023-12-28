import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const GOOGLE_CLIET_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
);