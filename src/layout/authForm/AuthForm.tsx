import React from 'react';

import { SubmitHandler } from 'react-hook-form';
import { Field, FormData } from '../../types/registrationTypes';
import { UniversalForm } from '../../components/universalForm/UniversalForm';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../hooks/isAuthenticated';

export const AuthForm = () => {
   const navigate = useNavigate();
   const onSubmit: SubmitHandler<FormData> = async (data) => {
      if (data) {
         navigate('/test');
      }
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
         <NavLink to={'/'}>register</NavLink>
      </div>
   );
};
