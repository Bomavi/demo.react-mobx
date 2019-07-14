import { PluginFactory, Plugin, Router, State } from 'router5';

import { routerStore } from './../store';

const factory = (_router: Router): Plugin => {
    return {
        onTransitionError: (
            _nextState: State,
            _prevState: State,
            error: any
        ): void => {
            console.error(error);
        },

        onTransitionSuccess: (nextState: State): void => {
            routerStore.setCurrent(nextState);
        },
    };
};

const mobxRouterPlugin = factory as PluginFactory;

export { mobxRouterPlugin };
