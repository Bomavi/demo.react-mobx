import { observable, action } from 'mobx';
import { serializable } from 'serializr';
import { maybe } from 'utils/helpers';

export class Search {
	@serializable @observable public q = '';

	@action public onChange = (name: TasksSearchKeys, value: string): void => {
		try {
			if (this[name] === undefined) throw Error(`${name} - field not found`);
			this[name] = value;
		} catch (e) {
			console.error(e);
		}
	};

	@action public reset = (): void => {
		this.q = '';
	};

	public toJSON = (): Record<string, any> => ({
		q: maybe(this.q),
	});
}
