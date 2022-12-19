import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
 
reportWebVitals();
