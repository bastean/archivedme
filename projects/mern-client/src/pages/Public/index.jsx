import { ForgotPassword, Login, Register, ResetPassword, Terms } from './Pages';

export class Public {
	static forgotPassword = (<ForgotPassword />);
	static login = (<Login />);
	static register = (<Register />);
	static resetPassword = (<ResetPassword />);
	static terms = (<Terms />);
}
