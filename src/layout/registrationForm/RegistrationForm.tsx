import axios from 'axios';

import { SubmitHandler } from 'react-hook-form';

import { UniversalForm } from '../../components/universalForm/UniversalForm';

import { Field, FormData } from '../../types/registrationTypes';
import { NavLink } from 'react-router-dom';

export const RegistrationForm = () => {
   const onSubmit: SubmitHandler<FormData> = async (data) => {
      try {
         await axios.post('http://localhost:5000/register', data);

         alert('Registration successful');
      } catch (error) {
         if (axios.isAxiosError(error)) {
            console.log(error);

            alert(error.response?.data?.message || 'Registration failed');
         } else {
            console.error(error);
            alert('An unexpected error occurred');
         }
      }
   };

   const fields: Field<FormData>[] = [
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

   return (
      <div>
         <h2>Registration</h2>
         <UniversalForm<FormData> fields={fields} onSubmit={onSubmit} />
         <NavLink to={'/login'}>Login</NavLink>
      </div>
   );
};
