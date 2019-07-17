/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { Icon } from 'views/elements';

/* local imports: common */
import { styles } from './styles';

interface CustomInputProps extends WithStyles<typeof styles> {
	placeholder?: string;
	onClick?: (value: string) => void;
	onChange?: (value: string) => void;
}

@observer
class CustomInputComponent extends React.Component<CustomInputProps> {
	@observable private inputValue: string = '';

	@computed private get isEmpty() {
		return !this.inputValue;
	}

	@action private changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.inputValue = value;
		this.changeCallbackHandler(value);
	};

	@action private actionClickHandler = () => {
		const { onClick } = this.props;
		if (onClick) onClick(this.inputValue);
		this.inputValue = '';
	};

	@action private clearHandler = () => {
		this.inputValue = '';
		this.changeCallbackHandler(this.inputValue);
	};

	private keyPressHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') this.changeCallbackHandler(this.inputValue);
	};

	private changeCallbackHandler = (value: string) => {
		const { onChange } = this.props;
		if (onChange) onChange(value);
	};

	public render() {
		const { classes, children, placeholder, onClick } = this.props;

		return (
			<div className={classes.root}>
				{children && onClick ? (
					<div className={classes.icon}>
						<IconButton
							className={classes.button}
							disabled={this.isEmpty}
							onClick={this.actionClickHandler}
						>
							{children}
						</IconButton>
					</div>
				) : (
					<div className={classes.icon}>{children}</div>
				)}
				{children && <Divider className={classes.divider} />}
				<InputBase
					className={classes.input}
					placeholder={placeholder}
					value={this.inputValue}
					onChange={this.changeHandler}
					onKeyPress={this.keyPressHandler}
				/>
				{!this.isEmpty && (
					<>
						<Divider className={classes.divider} />
						<div className={classes.icon}>
							<IconButton onClick={this.clearHandler}>
								<Icon name="close" size="md" />
							</IconButton>
						</div>
					</>
				)}
			</div>
		);
	}
}

const CustomInput = withStyles(styles)(CustomInputComponent);

export { CustomInput };
