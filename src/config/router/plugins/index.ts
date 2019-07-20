/* npm imports: common */
import { PluginFactory, Plugin, Router, State } from 'router5';

/* root imports: common */
import { routerStore } from 'config/router/store';

const factory = (_router: Router): Plugin => {
	return {
		onTransitionError: (_nextState: State, _prevState: State, error: any): void => {
			console.error(error);
		},

		onTransitionSuccess: (nextState: State): void => {
			routerStore.setCurrent(nextState);
		},
	};
};

const mobxRouterPlugin = factory as PluginFactory;

export { mobxRouterPlugin };
