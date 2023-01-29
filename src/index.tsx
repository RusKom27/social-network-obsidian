import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/ui/App';
import reportWebVitals from './reportWebVitals';

const rootHTMLElement: HTMLElement | null = document.getElementById('root');

if (rootHTMLElement) {
    ReactDOM.createRoot(rootHTMLElement).render(<App />);
}

reportWebVitals();


