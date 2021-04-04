import { user } from '__mocks__/data';
import { MockedAuthStore } from '__mocks__/store/auth';
import { mockedAuthServerResponse } from '__mocks__/services/auth';
import { mockedUsersServerResponse } from '__mocks__/services/users';

import { lightTheme, darkTheme } from 'utils/themes';

import { AuthStore } from './store';

describe('AuthStore', () => {
	afterEach(() => {
		mockedAuthServerResponse.reset();
	});

	afterAll(() => {
		mockedAuthServerResponse.restore();
	});

	it('should be empty', () => {
		const store = new AuthStore();

		expect(store.user).toBe(null);
	});

	it('should set inProgress to true', () => {
		const store = new AuthStore();

		store.setInProgress(true);

		expect(store.inProgress).toBe(true);
	});

	it('should change selected theme type', () => {
		const store = new AuthStore();

		store.changeSelectedThemeType('light');

		expect(store.themeNameToSwitch).toBe('dark');
		expect(store.selectedTheme).toBe(lightTheme);

		store.changeSelectedThemeType('dark');

		expect(store.themeNameToSwitch).toBe('light');
		expect(store.selectedTheme).toBe(darkTheme);
	});

	it('should request user authentication (failed response)', async () => {
		mockedAuthServerResponse.initFailResponse();

		const store = new AuthStore();

		try {
			await store.authenticate();
		} catch (e) {
			expect(e).toEqual('Network Error');
		}

		expect(store.user).toBe(null);
		expect(store.isAuthenticated).toBe(false);
	});

	it('should request user authentication (success response)', async () => {
		mockedAuthServerResponse.initSuccessResponse();

		const store = new AuthStore();
		const mockedStore = new MockedAuthStore();

		mockedStore.setUser(user);

		await store.authenticate();

		expect(store.user).not.toBe(null);
		expect(store.user).toEqual(mockedStore.user);
		expect(store.isAuthenticated).toBe(true);
	});

	it('should request user login (failed response)', async () => {
		mockedAuthServerResponse.initFailResponse();

		const store = new AuthStore();

		try {
			await store.login({});
		} catch (e) {
			expect(e).toEqual('Network Error');
		}

		expect(store.user).toBe(null);
	});

	it('should request user login (success response)', async () => {
		mockedAuthServerResponse.initSuccessResponse();

		const store = new AuthStore();
		const mockedStore = new MockedAuthStore();

		mockedStore.setUser(user);

		await store.login({});

		expect(store.user).not.toBe(null);
		expect(store.user).toEqual(mockedStore.user);
	});

	it('should request user registration (failed response)', async () => {
		mockedAuthServerResponse.initFailResponse();

		const store = new AuthStore();

		try {
			await store.register({ username: 'username', password: 'password' });
		} catch (e) {
			expect(e).toEqual('Network Error');
		}

		expect(store.user).toBe(null);
	});

	it('should request user registration (success response)', async () => {
		mockedAuthServerResponse.initSuccessResponse();

		const store = new AuthStore();
		const mockedStore = new MockedAuthStore();

		mockedStore.setUser(user);

		await store.register({ username: 'username', password: 'password' });

		expect(store.user).not.toBe(null);
		expect(store.user).toEqual(mockedStore.user);
	});

	it('should request user logout (failed response)', async () => {
		mockedAuthServerResponse.initFailResponse();

		const store = new AuthStore();

		try {
			await store.logout();
		} catch (e) {
			expect(e).toEqual('Network Error');
		}
	});

	it('should request user logout (success response)', async () => {
		mockedAuthServerResponse.initSuccessResponse();

		const store = new AuthStore();

		await store.authenticate();
		await store.logout();

		expect(store.user).toBe(null);
	});

	it('should request user update (failed response)', async () => {
		mockedUsersServerResponse.initFailResponse();

		const store = new AuthStore();

		try {
			await store.setUser(user);
			await store.update({});
		} catch (e) {
			expect(e).toEqual('Network Error');
		}
	});

	it('should request user update (success response)', async () => {
		mockedUsersServerResponse.initSuccessResponse();

		const store = new AuthStore();
		const mockedStore = new MockedAuthStore();

		mockedStore.setUser(user);
		store.setUser(user);

		await store.update({});

		expect(store.user).toEqual(mockedStore.user);
	});

	it('should switch theme and request user update (failed response)', async () => {
		mockedUsersServerResponse.initFailResponse();

		const store = new AuthStore();

		store.setUser(user);

		try {
			await store.switchTheme();
		} catch (e) {
			expect(e).toEqual('Network Error');
		}
	});

	it('should switch theme and request user update (success response)', async () => {
		mockedUsersServerResponse.initSuccessResponse();

		const store = new AuthStore();

		await store.setUser(user);
		await store.switchTheme();

		expect(store.selectedThemeType).toEqual(user.theme);
	});
});
