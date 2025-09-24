import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'http://localhost:8000/api/';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
