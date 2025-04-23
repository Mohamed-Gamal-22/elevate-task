import z from "zod";

export const loginScema = z.object({
    email : z.string({required_error : "Email is reuqired"})
             .min(1, "Email is reuqired")
             .email('Invalid Email'),
    password : z.string({required_error : "Password is required"}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Password should be at least 8 chars, contains 1 upperCase , 1 lowerCase, 1 number"
    )

})


// make type of schema changes automaatic if i change login schema 
export type LoginFields = z.infer<typeof loginScema> 

// ///////////////////////////  register schema

export const registerSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }).min(1, "First name is required"),
  lastName: z.string({ required_error: "Last name is required" }).min(1, "Last name is required"),
  email: z.string({ required_error: "Email is required" })
          .min(1, "Email is required")
          .email("Invalid email"),
  password: z.string({ required_error: "Password is required" })
             .regex(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
               "Password should be at least 8 chars, contain 1 uppercase, 1 lowercase, and 1 number"
             ),
  rePassword: z.string({ required_error: "Please confirm your password" }),
  phone: z.string({ required_error: "Phone number is required" })
          .regex(/^\+201[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
  gender: z.enum(["male", "female"], {
    required_error: "Gender is required",
    invalid_type_error: "Gender must be either 'male' or 'female'",
  }),
}).refine((data) => data.password === data.rePassword, {
  path: ["rePassword"],
  message: "Passwords do not match",
});

export type RegisterFields = z.infer<typeof registerSchema>;

