import styles from '../fieldsForm.module.css';

import { SubmitHandler } from 'react-hook-form';

import { NavLink, redirect } from 'react-router-dom';

import { FormData } from '@appTypes/registrationTypes';

import { UniversalForm } from '@components/universalForm/UniversalForm';

import { fields } from './authFields';
import { loginUserRequest } from '@/shared/api/requests/requests';
import React from 'react';

export const AuthForm = () => {
   const [useLogin, setUseLogin] = React.useState(false);

   const onSubmit: SubmitHandler<FormData> = async (data) => {
      await loginUserRequest(data, setUseLogin);
      if (useLogin) {
         redirect('/test');
      }
   };

   return (
      <div className={styles.fieldsForm}>
         <h2>Log in</h2>
         <UniversalForm fields={fields} onSubmit={onSubmit} />
         <NavLink to={'/'}>register</NavLink>
      </div>
   );
};
