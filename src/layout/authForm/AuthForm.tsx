import styles from '../fieldsForm.module.css';
import { SubmitHandler } from 'react-hook-form';
import { Field, FormData } from '../../types/registrationTypes';
import { UniversalForm } from '../../components/universalForm/UniversalForm';
import { NavLink, useNavigate } from 'react-router-dom';

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
      <div className={styles.fieldsForm}>
         <h2>Log in</h2>
         <UniversalForm fields={fields} onSubmit={onSubmit} />
         <NavLink to={'/'}>register</NavLink>
      </div>
   );
};
