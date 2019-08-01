import { Route } from 'router5';

declare type Params = Record<string, any>;

declare global {
	interface CustomeRoute extends Route {
		onActivate?: (nextParams?: Params) => void;
		onDeactivate?: (nextParams?: Params) => void;
	}
}
