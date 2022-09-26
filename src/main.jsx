import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ContextProvider} from './Context.jsx';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>
);
