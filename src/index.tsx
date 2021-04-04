// import { StrictMode } from 'react';
import { render } from 'react-dom';
// import { configure } from 'mobx';

import { UiStoreProvider } from 'config/store';
import { AuthStoreProvider } from 'pages/Login/store';
import { HomeStoreProvider } from 'pages/Home/store';
import App from 'views/layouts/App';

// configure({ enforceActions: 'observed' });

render(
  // <StrictMode>
  <UiStoreProvider>
    <AuthStoreProvider>
      <HomeStoreProvider>
        <App />
      </HomeStoreProvider>
    </AuthStoreProvider>
  </UiStoreProvider>,
  // </StrictMode>,
  document.getElementById('root') as HTMLElement
);
