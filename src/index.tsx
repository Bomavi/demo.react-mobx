/* npm imports: common */
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

/* root imports: view components */
import { App } from 'views/layouts/App';

/* root imports: common */
import router, { routerStore } from 'config/router';
import { globalStore } from 'config/global-store';

configure({ enforceActions: 'observed' });

if (localStorage.getItem('debug') === 'true') {
	enableLogging({
		predicate: (): boolean => true,
		action: true,
		reaction: true,
		transaction: true,
		compute: true,
	});
}

router.start((_err: any, _state: any) => {
	ReactDOM.render(
		<Provider routerStore={routerStore} globalStore={globalStore}>
			<App />
		</Provider>,
		document.getElementById('root') as HTMLElement
	);
});
