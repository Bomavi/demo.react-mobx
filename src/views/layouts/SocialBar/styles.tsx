import styled from 'styled-components';

const SocialBarWrapper: React.FC = styled.nav`
	display: flex;
	margin-left: -12px;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
`;

const IconWrapper: React.FC = styled.span`
	position: relative;
	display: flex;
	width: 50px;
	height: 80px;
`;

export { SocialBarWrapper, IconWrapper };
