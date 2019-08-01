import { observable, action } from 'mobx';
import { serializable } from 'serializr';
import { maybe } from 'utils/helpers';

type SearchFieldType = string;

export class Search {
	@serializable @observable public q: SearchFieldType = '';

	@action public onChange = (name: TasksSearchKeys, value: SearchFieldType) => {
		try {
			if (this[name] === undefined) throw Error(`${name} - field not found`);
			this[name] = value;
		} catch (e) {
			console.error(e);
		}
	};

	@action public reset = () => {
		this.q = '';
	};

	public toJSON = () => ({
		q: maybe(this.q),
	});
}
