import styled from 'styled-components';

const ContentWrapper = styled.main`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 1;
`;

const ContentScrollableWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const ContentInnerWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
`;

export { ContentWrapper, ContentScrollableWrapper, ContentInnerWrapper };
