/* local imports: common */
import { Search } from './search.model';

const model = new Search();

describe('Search model', () => {
	it('should not be empty', () => {
		model.onChange('q', 'test');
		expect(model.toJSON()).toEqual({ q: 'test' });
	});

	it('should be empty (undefined)', () => {
		model.onChange('q', 'test2');
		model.reset();
		expect(model.toJSON()).toEqual({ q: undefined });
	});
});
