export const IS_DEV = process.env.NODE_ENV === 'development';

export const BASE_URL = IS_DEV ? process.env.REACT_APP_DEV_HOST : '';

export const API_URL = IS_DEV
	? `${process.env.REACT_APP_DEV_API_PORT}${process.env.REACT_APP_API_PATH}`
	: '/api';

export const SERVICES_URL = IS_DEV
	? `${process.env.REACT_APP_DEV_SERVICES_PORT}${process.env.REACT_APP_SERVICES_PATH}`
	: '/services';
