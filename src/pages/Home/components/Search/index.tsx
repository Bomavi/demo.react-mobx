import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { debounce, debounceTiming } from 'utils/helpers';
import CustomInput from 'views/elements/CustomInput';

import { useHomeStore } from '../../store';

const Search: FC = () => {
	const { isFetching, search, searchTasks } = useHomeStore();

	useEffect(() => {
		return () => {
			if (search.q.length > 0) {
				search.onChange('q', '');
				searchTasks();
			}
		};
	}, [search, searchTasks]);

	const changeHandler = debounce((value: string) => {
		search.onChange('q', value);
		searchTasks();
	}, debounceTiming.input);

	return (
		<CustomInput
			icon={{
				name: 'magnify',
				svgSize: 'md',
			}}
			isFetching={isFetching}
			placeholder="Type to search..."
			onChange={changeHandler}
		/>
	);
};

export default observer(Search);
