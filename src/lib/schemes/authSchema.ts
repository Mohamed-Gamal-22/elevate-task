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