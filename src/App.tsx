import { Controller, SubmitHandler, useForm, Path, FieldValues } from 'react-hook-form';
import './App.css';

// Определение правил валидации для каждого поля
type Rule = {
   required?: string;
   pattern?: { value: RegExp; message: string };
   min?: number;
   minLength?: { value: number; message: string };
};

// Определение типа поля формы
type Field<T> = {
   name: Path<T>;
   label: string;
   rules: Rule;
};

// Универсальная форма данных
type UniversalFormProps<T extends FieldValues> = {
   fields: Field<T>[];
   onSubmit: SubmitHandler<T>;
};

function UniversalForm<T extends FieldValues>({ fields, onSubmit }: UniversalFormProps<T>) {
   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<T>();

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         {fields.map((field) => (
            <div key={String(field.name)}>
               <label htmlFor={String(field.name)}>{field.label}</label>
               <Controller
                  name={field.name}
                  control={control}
                  rules={field.rules || {}}
                  render={({ field }) => <input {...field} />}
               />
               {errors[field.name] && <span>{(errors[field.name]?.message as string) || ''}</span>}
            </div>
         ))}
         <button type="submit">Submit</button>
      </form>
   );
}

// Использование универсальной формы в компоненте App
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
