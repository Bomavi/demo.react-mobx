/* npm imports: common */
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterProvider } from 'react-router5';

/* root imports: view components */
import { App } from 'views/layouts/App';

/* root imports: common */
import router, { routerStore } from 'config/router';
import { globalStore } from 'config/global-store';
import { authStore } from 'features/Login/store';

/* mobx configuration */
configure({ enforceActions: 'observed' });

/* start router with react app */
router.start(() => {
	ReactDOM.render(
		<RouterProvider router={router}>
			<Provider routerStore={routerStore} globalStore={globalStore} authStore={authStore}>
				<App />
			</Provider>
		</RouterProvider>,
		document.getElementById('root') as HTMLElement
	);
});
