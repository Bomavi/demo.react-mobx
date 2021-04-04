import { FC } from 'react';

import CustomInput, { CustomInputProps } from 'views/elements/CustomInput';

import { useStyles } from './styles';

interface Props extends Partial<CustomInputProps> {
  isFetching?: boolean;
}

const EditInput: FC<Props> = (props) => {
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

export default EditInput;
