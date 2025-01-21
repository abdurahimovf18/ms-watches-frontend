"use client";

import { FormInput } from "@/shared/inputs/form-input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormErrors } from "@/shared/errors/form-error";
import { getAuthErrorMessage, getBackendUrl } from "@/utils/apiClient";
import { useRouter } from "@/i18n/routing";
import { API } from "@/utils/apiClient"
import { url } from "inspector";


const SignupFormSchema = z.object({
  first_name: z
    .string()
    .min(1, "First name is required")  // Ensures a non-empty first name
    .max(50, "First name must be under 50 characters"),
  
  last_name: z
    .string()
    .min(1, "Last name is required")  // Ensures a non-empty last name
    .max(50, "Last name must be under 50 characters"),
  
  phone_number: z
    .string()
    .min(10, "Phone number must be at least 10 digits")  // Ensures phone number is at least 10 digits
    .max(15, "Phone number cannot exceed 15 digits")  // Limits the phone number length
    .regex(/^\+?\d{10,15}$/, "Phone number must be a valid format (e.g., +1234567890)"), // Validates phone number format
  
  email: z
    .string()
    .email("Invalid email address")
    .trim()  // Trims whitespace from the email input
    .min(1, "Email is required"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password cannot exceed 128 characters")  // Ensures a maximum password length
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")  // Requires lowercase letter
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")  // Requires uppercase letter
    .regex(/[0-9]/, "Password must contain at least one number")  // Requires a number
    .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)"), // Requires special character
});


export type FormData = z.infer<typeof SignupFormSchema>;

export default function Signin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(SignupFormSchema),
  });

  const navigation = useRouter()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const resp = await API.post("users/v1/signup", data);

      if (resp.status === 201) {
        navigation.push({ pathname: "/account/signin" });
      } else {
        throw new Error(resp.data?.detail || "Unexpected error occurred.");
      }
    } catch (error) {
      const message = getAuthErrorMessage(error, 
        {409: "Email or Phone number is already in use. Please, try again"})
      setError("root", {message: message})
    }
  };

  return (
    <main className="w-full sm:pt-7 sm:pb-16 md:pt-16 md:pb-24">
      <div className="w-full flex justify-center items-start">
        <div className="sm:w-[90%] md:w-[400px] md:px-0 h-max flex items-center justify-center flex-col mt-10">
          <h1
            className={`sm:text-4xl md:text-[2.7rem] font-teachers`}
          >
            Create account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:mt-14 sm:mt-7 items-center justify-center w-full h-max"
            noValidate
          >
            {/* Displaying Form Errors */}
            <FormErrors errors={errors} />

            <div className="flex flex-col justify-center items-center gap-4 w-full h-max">

							{/* First Name Input */}
              <div className="w-full h-[45px] ring-1 ring-foreground ring-opacity-80 hover:ring-2">
                <FormInput
                  type="text"
                  placeholder="First name"
                  {...register("first_name")}
                />
              </div>

							{/* Last Name Input */}
              <div className="w-full h-[45px] ring-1 ring-foreground ring-opacity-80 hover:ring-2">
                <FormInput
                  type="text"
                  placeholder="Last Name"
                  {...register("last_name")}
                />
              </div>

							{/* Phone Number Input */}
              <div className="w-full h-[45px] ring-1 ring-foreground ring-opacity-80 hover:ring-2">
                <FormInput
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone_number")}
                />
              </div>
							
              {/* Email Input */}
              <div className="w-full h-[45px] ring-1 ring-foreground ring-opacity-80 hover:ring-2">
                <FormInput
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                />
              </div>

              {/* Password Input */}
              <div className="w-full h-[45px] ring-1 ring-foreground ring-opacity-80 hover:ring-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <FormInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-foreground text-background mt-5 mb-2 px-4 py-2 hover:py-3 hover:px-5 hover:-translate-y-1 hover:mb-0 disabled:opacity-50"
            >
              {isSubmitting ? "CREATING ..." : "CREATE"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
