import React from 'react';
import styled from 'styled-components';

import { Link } from 'views/elements';

const LinkWrapper: React.FC = styled.span`
	padding-right: 10px;

	> a {
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
	}
`;

class NavBar extends React.Component<{}> {
	public render(): React.ReactNode {
		return (
			<nav>
				<LinkWrapper>
					<Link name="home">HOME</Link>
				</LinkWrapper>
				<LinkWrapper>
					<Link name="about">ABOUT</Link>
				</LinkWrapper>
				<LinkWrapper>
					<Link name="about">BLOG</Link>
				</LinkWrapper>
				<LinkWrapper>
					<Link name="about">PHOTOS</Link>
				</LinkWrapper>
				<LinkWrapper>
					<Link name="about">PORTFOLIO</Link>
				</LinkWrapper>
			</nav>
		);
	}
}

export { NavBar };
