declare interface LoginType {
	username?: string;
	password?: string;
	isGuest?: boolean;
}

declare interface RegisterType {
	username: string;
	password: string;
}

declare interface UserType {
	username: string;
	createdAt: string;
	updatedAt: string;
}

declare type AuthenticateResponseType = UserType | null;
declare type LoginResponseType = UserType | null;
declare type RegisterResponseType = UserType | null;
