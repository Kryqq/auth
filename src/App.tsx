import { SubmitHandler, Path } from 'react-hook-form';
import './App.css';
import { UniversalForm } from './components/universalForm/UniversalForm';


type Rule = {
   required?: string;
   pattern?: { value: RegExp; message: string };
   min?: number;
   minLength?: { value: number; message: string };
};

// Определение типа поля формы
export type Field<T> = {
   name: Path<T>;
   label: string;
   rules: Rule;
};

type FormData = {
   username: string;
   email: string;
   password: string;
};

function App() {
   const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log(data);
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
   ];

   return (
      <div>
         <h2>Form</h2>
         <UniversalForm<FormData> fields={fields} onSubmit={onSubmit} />
      </div>
   );
}

export default App;
