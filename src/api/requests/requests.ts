
import { api } from "../instance";
import { FormData } from "../../types/registrationTypes";
import axios from "axios";
import { redirect } from "react-router-dom";
import React from "react";


const requestConstants = {
	REGISTER_USER: '/register'
}



export const registerUser = (data: FormData)=> api.post(requestConstants.REGISTER_USER, data)

export const registerUserRequest = async (data: FormData, setUseRegister: React.Dispatch<React.SetStateAction<boolean>>) => {


	try {
	    await registerUser(data) ;
	    setUseRegister(true)
	    alert('Registration successful');
	
	} 
	catch (error) {
	    if (axios.isAxiosError(error)) {
		   console.log(error);
		   
		   alert(error.response?.data?.message || 'Registration failed');

	    } else {
		   console.error(error);
		   alert('An unexpected error occurred');
	    }
	}
 }