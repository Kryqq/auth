import {
  Control,
  Controller,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { Field } from "@appTypes/registrationTypes";
import { FormData } from "@appTypes/registrationTypes";

type UniversalFormProps<T extends FieldValues> = {
  fields: Field<T>[];
  onSubmit: SubmitHandler<T>;
};
export const UniversalForm = <T extends FieldValues>({
  fields,
  onSubmit,
}: UniversalFormProps<T>) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={String(field.name)}>
          <div>
            <label htmlFor={field.name}>{field.label}</label>
          </div>
          <Controller
            defaultValue={"" as Path<T>}
            name={field.name as keyof FormData}
            control={control as unknown as Control<FormData>}
            rules={field.rules ?? {}}
            render={({ field }) => <input {...field} />}
          />
          {errors[field.name] && (
            <div className="errorMessage">
              {(errors[field.name]?.message as string) ?? ""}
            </div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
