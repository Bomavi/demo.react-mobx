/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { Icon, CustomInput } from 'views/elements';

/* root imports: common */
import { debounce } from 'utils/helpers';

/* local imports: common */
import { styles } from './styles';

interface SearchProps extends WithStyles<typeof styles> {}

@observer
class SearchComponent extends React.Component<SearchProps> {
	@observable private tabIndex: number = 0;

	@action private tabClickHandler = (e: React.ChangeEvent<{}>, value: number) => {
		this.tabIndex = value;
	};

	@action public changeHandler = debounce((value: string) => {
		console.warn('changeHandler: ', value);
	}, 500);

	public render() {
		// const { classes } = this.props;

		return (
			<CustomInput placeholder="Search tasks..." onChange={this.changeHandler}>
				<Icon name="magnify" size="md" />
			</CustomInput>
		);
	}
}

const Search = withStyles(styles)(SearchComponent);

export { Search };
