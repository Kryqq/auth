import { Field, FormData } from '../../types/registrationTypes';


export const fields: Field<FormData>[] = [
	{ name: 'username', label: 'Username', rules: { required: 'Username is required' } },
	{
	   name: 'email',
	   label: 'Email',
	   rules: { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } },
	},
	{
	   name: 'password',
	   label: 'Password',
	   rules: {
		 min: 3,
		 required: 'Password is required',
		 minLength: { value: 5, message: 'Password is too short' },
	   },
	},
	{
	   name: 'PasswordConfirm',
	   label: 'Confirm the password',
	   rules: {
		 min: 3,
		 required: 'Password is required',
		 minLength: { value: 5, message: 'Password is too short' },
	   },
	},
  ];