import NextAuth, { User } from "next-auth"
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User {
        token:string,
        user : ApplicationUser
    }

    interface Session {
        user : ApplicationUser
    }
}


declare module "next-auth/jwt" {
    interface JWT extends User {}
}



// ///////////////////////////////
// export type AuthType = {
//     message :string,
//     user : User,
//     token : string
// }

// type User = {
//     _id : string,
//     firstName:string,
//     lastName:string,
//     email:string,
//     gender :string,
//     phone:string,
//     photo:string,
//     role:string,
//     wishlist:[],
//     addresses:[],
//     createdAt: string,
// }