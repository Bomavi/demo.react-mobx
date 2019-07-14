import styled from 'styled-components';

export const LinkWrapper = styled.a`
	display: inline-block;

	&.block {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;

		.icon-wrapper {
			width: 100%;
			height: 20px;
		}

		&.active {
			background-color: rgba(0, 0, 0, 0.1);
			box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1), inset 0 -5px 15px rgba(0, 0, 0, 0.05);

			.icon-wrapper {
				box-shadow: inset 4px 0 0 #fff;
			}
		}
	}
`;
