import { SubmitHandler, Path } from 'react-hook-form';
import './App.css';
import { UniversalForm } from './components/universalForm/UniversalForm';
import axios from 'axios';

type Rule = {
   required?: string;
   pattern?: { value: RegExp; message: string };
   min?: number;
   minLength?: { value: number; message: string };
};

export type Field<T> = {
   name: Path<T>;
   label: string;
   rules: Rule;
};

type FormData = {
   username: string;
   email: string;
   password: string;

   //???
   PasswordConfirm: string;
};

function App() {
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
      </div>
   );
}

export default App;
