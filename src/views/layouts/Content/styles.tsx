import styled from 'styled-components';

const ContentWrapper: React.FC = styled.main`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: calc(100% - 160px);
	margin: 80px 0;
	overflow: hidden;
	z-index: 1;
`;

const ContentScrollableWrapper: React.FC = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	/* overflow-y: auto; */
`;

const ContentInnerWrapper: React.FC = styled.div`
	position: relative;
	width: 100%;
	height: auto;
`;

export { ContentWrapper, ContentScrollableWrapper, ContentInnerWrapper };
