import { FC, memo } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface Props {
	tabIndex: number;
	onChange: (e: React.ChangeEvent<Record<string, never>>, v: number) => void;
}

const LoginTabs: FC<Props> = ({ tabIndex, onChange }) => {
	return (
		<Tabs
			variant="fullWidth"
			indicatorColor="secondary"
			value={tabIndex}
			onChange={onChange}
		>
			<Tab label="Login" />
			<Tab label="Register" />
		</Tabs>
	);
};

export default memo(LoginTabs);
