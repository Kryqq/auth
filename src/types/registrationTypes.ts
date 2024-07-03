import { Path } from "react-hook-form";


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
  
  export type FormData = {
	username: string;
	email: string;
	password: string;
  
	//???
	PasswordConfirm: string;
  };