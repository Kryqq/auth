import { api } from '../instance';
import { FormData } from '@appTypes/registrationTypes';
import axios from 'axios';

import React from 'react';

const requestConstants = {
   REGISTER_USER: '/register',
   LOGIN_USER: '/login',
};

export const registerUser = (data: FormData) => api.post(requestConstants.REGISTER_USER, data);

export const registerUserRequest = async (
   data: FormData,
   setUseRegister: React.Dispatch<React.SetStateAction<boolean>>
) => {
   try {
      await registerUser(data);
      setUseRegister(true);
      alert('Успешная регистрация');
   } catch (error) {
      if (axios.isAxiosError(error)) {
         alert(error.response?.data?.message || 'Registration failed');
      } else {
         console.error(error);
         alert('Что-то пошло не так');
      }
   }
};


export const loginUser = (data: FormData) => api.post(requestConstants.LOGIN_USER, data);

export const loginUserRequest = async (
	data: FormData,
	setUserLogin: React.Dispatch<React.SetStateAction<boolean>>
  ) => {

	
	try {
	   await loginUser(data);
	   
	   setUserLogin(true);
	   alert('Успешный вход');
	} catch (error) {
	   if (axios.isAxiosError(error)) {
		 alert(error.response?.data?.message || 'Ошибка входа');
	   } else {
		 console.error(error);
		 alert('Что-то пошло не так');
	   }
	}
  };
  