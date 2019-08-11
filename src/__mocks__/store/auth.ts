/* npm imports: common */
import { observable, action } from 'mobx';

/* root imports: common */
import { UserModel } from 'features/Login/user.model';

export class MockedAuthStore {
	@observable public user: UserModel | null = null;

	@action public setUser = (user: UserType) => {
		this.user = new UserModel(user);
	};
}
