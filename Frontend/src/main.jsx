import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContextProvider from './context/AppContext'; // ✅ Import Context Provider
import './index.css'; // ✅ Ensure Tailwind & Global Styles are applied

// 🔥 Create Root for Better Performance
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppContextProvider> {/* ✅ Ensures Global State Works */}
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
