import { ICurrentUser } from 'src/app/shared/types/CurrentUser.interface';
import { IBackendErrors } from './backendErrors.interface';

export interface IAuthState {
	isSubmitting: boolean,
	currentUser: ICurrentUser | null,
	isLoggedIn: boolean | null,
	validationErrors: IBackendErrors | null
	isLoading: boolean
}