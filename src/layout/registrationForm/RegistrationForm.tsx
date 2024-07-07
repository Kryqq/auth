import React from 'react';

import styles from '../fieldsForm.module.css';

import { SubmitHandler } from 'react-hook-form';

import { NavLink, redirect } from 'react-router-dom';

import { UniversalForm } from '../../components/universalForm/UniversalForm';

import { FormData } from '../../types/registrationTypes';

import { registerUserRequest } from '../../api/requests/requests';

import { fields } from './registrationFields';

export const RegistrationForm = () => {
   const [useRegister, setUseRegister] = React.useState(false);
   // надо ли тут писать async?
   const onSubmit: SubmitHandler<FormData> = async (data) => {
      await registerUserRequest(data, setUseRegister);

      console.log(registerUserRequest);

      if (useRegister) {
         redirect('/test');
      }
   };

   return (
      <div className={styles.fieldsForm}>
         <h2>Registration</h2>
         <UniversalForm<FormData> fields={fields} onSubmit={onSubmit} />
         <NavLink to={'/login'}>Login</NavLink>
      </div>
   );
};
