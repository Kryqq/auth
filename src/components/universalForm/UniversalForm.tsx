import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Field } from '../../App';
type UniversalFormProps<T extends FieldValues> = {
   fields: Field<T>[];
   onSubmit: SubmitHandler<T>;
};
export const UniversalForm = <T extends FieldValues>({ fields, onSubmit }: UniversalFormProps<T>) => {
   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<T>();

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         {fields.map((field) => (
            <div key={String(field.name)}>
               <label htmlFor={field.name}>{field.label}</label>
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
};
