import styled from 'styled-components';

export const StyledWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.icon-box {
		display: block;

		svg {
			display: block;
		}
	}

	.primary {
		svg {
			fill: #0074f9;
		}
	}

	.secondary {
		svg {
			fill: #fff;
		}
	}

	.white {
		svg {
			fill: #fff;
		}
	}

	.black {
		svg {
			fill: #000;
		}
	}

	.gray {
		svg {
			fill: #777;
		}
	}

	.light {
		svg {
			fill: rgba(0, 0, 0, 0.1);
		}
	}

	.light-gray {
		svg {
			fill: #ccc;
		}
	}

	.dark-gray {
		svg {
			fill: #444;
		}
	}

	.warn {
		svg {
			fill: #ff9800;
		}
	}

	.success {
		svg {
			fill: #4caf50;
		}
	}

	.danger {
		svg {
			fill: #f44336;
		}
	}

	.xs {
		svg {
			width: 16px;
			height: 16px;
		}
	}

	.sm {
		svg {
			width: 20px;
			height: 20px;
		}
	}

	.md {
		svg {
			width: 26px;
			height: 26px;
		}
	}

	.lg {
		svg {
			width: 36px;
			height: 36px;
		}
	}

	.xl {
		svg {
			width: 48px;
			height: 48px;
		}
	}

	.xxl {
		svg {
			width: 56px;
			height: 56px;
		}
	}
`;
