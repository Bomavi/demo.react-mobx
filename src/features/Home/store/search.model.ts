import { makeAutoObservable } from 'mobx';
// import { serializable } from 'serializr';

import { maybe } from 'utils/helpers';

export interface SearchModel {
	q: string;

	onChange(name: TasksSearchKeys, value: string): void;
	reset(): void;
	toJSON(): Record<string, any>;
}

export const createSearchModel = (): SearchModel => {
	return makeAutoObservable<SearchModel>({
		q: '',

		onChange(name, value) {
			try {
				if (this[name] === undefined) throw Error(`${name} - field not found`);
				this[name] = value;
			} catch (e) {
				console.error(e);
			}
		},

		reset() {
			this.q = '';
		},

		toJSON() {
			return {
				q: maybe(this.q),
			};
		},
	});
};

// export class Search {
// 	@serializable public q = '';

// 	constructor() {
// 		makeAutoObservable(this, { toJSON: false });
// 	}

// 	public onChange = (name: TasksSearchKeys, value: string): void => {
// 		try {
// 			if (this[name] === undefined) throw Error(`${name} - field not found`);
// 			this[name] = value;
// 		} catch (e) {
// 			console.error(e);
// 		}
// 	};

// 	public reset = (): void => {
// 		this.q = '';
// 	};

// 	public toJSON = (): Record<string, any> => ({
// 		q: maybe(this.q),
// 	});
// }
