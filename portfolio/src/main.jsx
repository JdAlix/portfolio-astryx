import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {InternationalizationProvider} from '@astryxdesign/core';
import frFR from '@astryxdesign/core/locales/fr-FR.generated.js';
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import './portfolio.css';
import './styles.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InternationalizationProvider locale="fr-FR" messages={{'fr-FR': frFR}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InternationalizationProvider>
  </StrictMode>,
);
