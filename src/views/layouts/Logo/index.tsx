import React from 'react';
import styled from 'styled-components';

const LogoWrapper: React.FC = styled.span`
	padding: 0 30px;
	font-size: 22px;
	font-weight: bold;
	text-transform: uppercase;
`;

const Logo = (): JSX.Element => {
	return <LogoWrapper>BOMAV1</LogoWrapper>;
};

export { Logo };
