import React from "react";
import { render } from 'react-snapshot';
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithHistory } from "./auth0-provider-with-history";
import { EnvProvider } from "./context/env.context";
import "./styles/styles.css";
import CssBaseline from '@mui/material/CssBaseline';


render(
  <React.StrictMode>
    <BrowserRouter>
      <EnvProvider>
        <Auth0ProviderWithHistory>
          <CssBaseline />
          <App />
        </Auth0ProviderWithHistory>
      </EnvProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
