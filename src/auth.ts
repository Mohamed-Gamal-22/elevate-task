import { NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials"

// i will use it again so made it in seprated file
import { JSON_HEADER } from "./lib/constants/api.constant"

export const authOptions: NextAuthOptions = {
    // pages: {
    //     signIn: "/en/auth/login"
    // },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                const response = await fetch(`${process.env.API}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    headers: {
                        ...JSON_HEADER
                    }
                })

                const payload: ApiResponse<LoginResponse> = await response.json()

                if ("code" in payload) {
                    throw new Error(payload.message)
                }

                return {
                    id: payload.user._id,
                    token: payload.token,
                    user: payload.user
                }
            }
        })
    ],

    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.token = user.token; 
                token.user = user.user;
            }
            return token;
        },

        session: ({ session, token }) => {
            session.user = token.user;
            session.token = token.token; 
            return session;
        }
    }
}







// import { NextAuthOptions, User } from "next-auth"
// import Credentials from "next-auth/providers/credentials"

// // i will use it again so made it in seprated file
// import { JSON_HEADER } from "./lib/constants/api.constant"

// export const authOptions : NextAuthOptions = {  
//     // pages : {
//     //     signIn : "/en/auth/login"
//     // },
    
//     providers : [
//         Credentials({
//             name: 'Credentials',
//             credentials : {
//                 email : {},
//                 password: {}
//             },
//             // function which works when sign in
//             authorize : async (credentials) => {
//                 // connect with db
//                 const response = await fetch(`${process.env.API}/auth/signin`,{
//                     method: "POST",
//                     body : JSON.stringify({
//                         email: credentials?.email,
//                         password: credentials?.password
//                     }),
//                     headers:{
//                         ...JSON_HEADER
//                     }
//                 })
//                 const payload : ApiResponse<LoginResponse> = await response.json()
//                 // console.log("myData", payload)

//                 if("code" in payload) {
//                     throw new Error(payload.message)
//                 }

//                  return {
//                     id : payload.user._id,
//                     token : payload.token,
//                     user: payload.user
//                  }



//                 // casses returns
//                 // 1- return null => fail to login but dont know why
//                 // 2- return {id : ""} => success login and this is userData
//                 // 3- throw new Error "" => fail and know why 
//             }
//         })
//     ],

//     callbacks : {
//         // jwt() => take data after success login from provider and encript token and save in cookie
//         jwt : ({token, user}) => {
//             //token put data inside to save in cookie
//             // user data after login
//             if(user) {
//                 token.token = user.token; // set data inside token
//                 token.user = user.user;
//             }
//             return token // this will be encripted 
//         },

//         session : ({session, token}) => {
//             // token from prev step
//             // session to hold some data from token to show
//             session.user = token.user;
//             return session
//         }
        
//         // redirect() => to go spicific page after login
//         // signIn() => if return true login is success otherwithe no


//     }

// }