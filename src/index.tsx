import { render } from 'react-dom';
import { configure } from 'mobx';
import { RouterProvider } from 'react-router5';

import router, { RouterStoreProvider } from 'config/router';
import { RootStoreProvider, UiStoreProvider } from 'config/store';
import { App } from 'views/layouts/App';

/* mobx configuration */
configure({ enforceActions: 'observed' });

/* init react app */
render(
	<RouterProvider router={router}>
		<RouterStoreProvider>
			<UiStoreProvider>
				<RootStoreProvider>
					<App />
				</RootStoreProvider>
			</UiStoreProvider>
		</RouterStoreProvider>
	</RouterProvider>,
	document.getElementById('root') as HTMLElement
);
