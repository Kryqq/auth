import React from 'react';
import { UniversalForm } from '../components/universalForm/UniversalForm';

import { SubmitHandler } from 'react-hook-form';

import { Field, FormData } from '../types/registrationTypes';

export const AuthForm = () => {
   const onSubmit: SubmitHandler<FormData> = async (data) => {
      console.log(data);
   };

   const fields: Field<FormData>[] = [
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

   return (
      <div>
         <UniversalForm fields={fields} onSubmit={onSubmit} />
      </div>
   );
};
