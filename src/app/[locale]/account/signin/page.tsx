"use client";

import { FormInput } from "@/shared/inputs/form-input";
import { Link } from "@/i18n/routing";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormErrors } from "@/shared/errors/form-error";
import { setAccessToken } from "@/utils/tokenManager";
import axios from "axios";
import { useRouter } from "@/i18n/routing";
import { getAuthErrorMessage, getBackendUrl } from "@/utils/apiClient";

const LoginFormSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .trim()
    .min(1, "Email is required"),
  password: z
    .string()
    .max(128, "Password cannot exceed 128 characters"),
});

export type FormData = z.infer<typeof LoginFormSchema>;

export default function Signin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  const router = useRouter();

  // Form submission handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const signinUrl = getBackendUrl("/users/v1/access_token");
      const response = await axios.post(signinUrl, data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200 || response.data.token) {
        setAccessToken(response.data.token);
        await router.push({ pathname: "/account" });
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      const message = getAuthErrorMessage(error, {401: "Invalid credentials. Please check your email and password."})
      setError("root", {message: message})
    }
  };

  return (
    <main className="w-full sm:pt-7 sm:pb-16 md:pt-16 md:pb-24">
      <div className="w-full flex justify-center items-start">
        <div className="sm:w-[356px] md:w-[460px] md:px-0 h-max flex items-center justify-center flex-col">
          <h1 className="sm:text-4xl md:text-[2.7rem] text-zinc-950 font-teachers">
            Login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:mt-14 sm:mt-7 items-center justify-center w-full h-max"
            noValidate
          >
            {/* Displaying Form Errors */}
            <FormErrors errors={errors} />

            <div className="flex flex-col justify-center items-center gap-4 w-full h-max">
              {/* Email Input */}
              <div className="w-full h-[45px] ring-1 ring-zinc-400 hover:ring-zinc-500 hover:ring-2">
                <FormInput
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
              </div>

              {/* Password Input */}
              <div className="w-full h-[45px] ring-1 ring-zinc-400 hover:ring-zinc-500 hover:ring-2">
                <FormInput
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  aria-invalid={!!errors.password}
                  aria-describedby="password-error"
                />
              </div>

              <div className="flex justify-start items-start h-max w-full">
                <Link href="/">
                  <p className="text-[0.8rem] underline-hover font-default">
                    Forgot your password?
                  </p>
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white mt-5 mb-2 px-4 py-2 hover:py-3 hover:px-5 hover:-translate-y-1 hover:mb-0 disabled:opacity-50"
            >
              {isSubmitting ? "SIGNING IN ..." : "SIGN IN"}
            </button>

            <Link href="/account/signup">
              <p className="underline-hover text-[0.8rem] font-ffmeta">
                Create account
              </p>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
