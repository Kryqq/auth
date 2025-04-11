import { Field, FormData } from '../../../../shared/types/registrationTypes';

export const fields: Field<FormData>[] = [
	{
	   name: 'email',
	   label: 'Email',
	   rules: { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } },
	},
	{
	   name: 'password',
	   label: 'Password',
	   rules: {
		 required: 'Password is required',
		 minLength: { value: 6, message: 'Password must be at least 6 characters' },
	   },
	},
  ];