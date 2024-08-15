import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes.jsx';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Replace with your actual Google Client ID
const clientId = 'YOUR_GOOGLE_CLIENT_ID';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AppRoutes/>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
