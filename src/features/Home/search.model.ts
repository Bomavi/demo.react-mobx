import { observable, action } from 'mobx';
import { serializable } from 'serializr';
import { maybe } from 'utils/helpers';

type SearchFieldType = string | number;

export class Search {
	@serializable @observable public q: SearchFieldType = '';

	@action public onChange = (name: TasksSearchKeys, value: string | number) => {
		try {
			if (this[name] === undefined) throw Error(`${name} - field not found`);
			this[name] = value;
		} catch (e) {
			console.error(e.message);
		}
	};

	@action public reset = () => {
		this.q = '';
	};

	public toJSON = () => ({
		q: maybe(this.q),
	});
}
