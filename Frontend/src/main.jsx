import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContextProvider from './context/AppContext'; // ✅ Import AppContextProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider> {/* ✅ Wrap App in Context Provider */}
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
