/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { debounce, debounceTiming } from 'utils/helpers';

/* local imports: common */
import { styles } from './styles';

interface SearchProps extends WithStyles<typeof styles> {}

@observer
class SearchComponent extends React.Component<SearchProps> {
	@action public changeHandler = debounce((value: string) => {
		console.warn('changeHandler: ', value);
	}, debounceTiming.input);

	public render() {
		// const { classes } = this.props;

		return (
			<CustomInput
				icon={{
					name: 'magnify',
					svgSize: 'md',
				}}
				placeholder="Type to search tasks..."
				onChange={this.changeHandler}
			/>
		);
	}
}

const Search = withStyles(styles)(SearchComponent);

export { Search };
