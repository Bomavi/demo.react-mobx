import { FC } from 'react';

import { CustomInput, CustomInputProps } from 'views/elements';

import { useStyles } from './styles';

export interface EditInputProps extends Partial<CustomInputProps> {
	isFetching?: boolean;
}

const EditInput: FC<EditInputProps> = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CustomInput
				icon={{
					name: 'check',
					svgSize: 'md',
					title: 'Save',
				}}
				{...props}
			/>
		</div>
	);
};

export { EditInput };
