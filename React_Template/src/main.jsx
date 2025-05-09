import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './app/Store.jsx'; // Import the Redux store
import { Provider } from 'react-redux'; // Import the Provider from react-redux

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the App component with Provider */}
      <App />
    </Provider>
  </StrictMode>
);
