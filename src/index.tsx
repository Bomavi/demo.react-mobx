import { render } from 'react-dom';
import { configure } from 'mobx';

import { RootStoreProvider, UiStoreProvider } from 'config/store';
import { App } from 'views/layouts/App';

/* mobx configuration */
configure({ enforceActions: 'observed' });

/* init react app */
render(
	<UiStoreProvider>
		<RootStoreProvider>
			<App />
		</RootStoreProvider>
	</UiStoreProvider>,
	document.getElementById('root') as HTMLElement
);
