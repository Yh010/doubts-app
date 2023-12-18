"use client";
import { createDoubt } from "@/app/lib/actions";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormState } from "react-dom";

interface FormValues {
  firstName: string;
  lastName: string;
}

export default function Form() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    // Initialize other form fields here
  });

  /*   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = createDoubt(formValues);
    // Reset form after submission
    if (success) {
      router.push("/"); // Redirect to the root ("/") page on success
      //router.push("/"); // Redirect to the root ("/") page on success
      // Reset form after submission
      setFormValues({
        firstName: "",
        lastName: "",
        // Reset other form fields here
      });
    } else {
      // Handle failure or display an error message
    }
  }; */

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createDoubt, initialState);
  return (
    <form action={dispatch}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
