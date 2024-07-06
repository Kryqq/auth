import styles from '../fieldsForm.module.css';

import axios from 'axios';

import { SubmitHandler } from 'react-hook-form';

import { UniversalForm } from '../../components/universalForm/UniversalForm';

import { Field, FormData } from '../../types/registrationTypes';
import { NavLink } from 'react-router-dom';
import { registerUserRequest } from '../../api/requests/requests';

export const RegistrationForm = () => {
   const onSubmit: SubmitHandler<FormData> = (data) => {
      registerUserRequest(data);
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
      <div className={styles.fieldsForm}>
         <h2>Registration</h2>
         <UniversalForm<FormData> fields={fields} onSubmit={onSubmit} />
         <NavLink to={'/login'}>Login</NavLink>
      </div>
   );
};
