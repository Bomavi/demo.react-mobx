/* npm imports: common */
import React from 'react';
import { inject, observer } from 'mobx-react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { HomeStore } from 'features/Home/store';
import { debounce, debounceTiming } from 'utils/helpers';

/* local imports: common */
import { styles } from './styles';

interface SearchProps extends WithStyles<typeof styles> {
	store?: HomeStore;
}

@inject('store')
@observer
class SearchComponent extends React.Component<SearchProps> {
	public changeHandler = debounce((value: string) => {
		this.props.store!.search.onChange('q', value);
		this.props.store!.searchTasks();
	}, debounceTiming.input);

	public render() {
		// const { classes } = this.props;
		const { isFetching } = this.props.store!;

		return (
			<CustomInput
				icon={{
					name: 'magnify',
					svgSize: 'md',
				}}
				isFetching={isFetching}
				placeholder="Type to search tasks..."
				onChange={this.changeHandler}
			/>
		);
	}
}

const Search = withStyles(styles)(SearchComponent);

export { Search };
