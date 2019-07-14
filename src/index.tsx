import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

import router, { routerStore } from 'utils/services/router';
import { globalStore } from 'config/store';

import { App } from 'views/layouts/App';

configure({ enforceActions: 'observed' });

// if (module.hot && localStorage.getItem('debug') === 'true') {
if (localStorage.getItem('debug') === 'true') {
	enableLogging({
		predicate: (): boolean => true,
		action: true,
		reaction: true,
		transaction: true,
		compute: true,
	});
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
`;

router.start((_err: any, _state: any): void => {
	ReactDOM.render(
		<>
			<Normalize />
			<GlobalStyles />
			<Provider routerStore={routerStore} globalStore={globalStore}>
				<App />
			</Provider>
		</>,
		document.getElementById('root') as HTMLElement
	);
});

// if (module.hot) module.hot.accept();
