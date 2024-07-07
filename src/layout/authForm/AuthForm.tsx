import styles from '../fieldsForm.module.css';

import { SubmitHandler } from 'react-hook-form';

import { NavLink, useNavigate } from 'react-router-dom';

import { FormData } from '../../types/registrationTypes';

import { UniversalForm } from '../../components/universalForm/UniversalForm';

import { fields } from './authFields';

export const AuthForm = () => {
   const navigate = useNavigate();
   const onSubmit: SubmitHandler<FormData> = async (data) => {
      if (data) {
         navigate('/test');
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
