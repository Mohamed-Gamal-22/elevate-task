declare type ApplicationUser = {
    _id : string,
    firstName:string,
    lastName:string,
    email:string,
    gender :string,
    phone:string,
    photo:string,
    role:string,
    wishlist:[],
    addresses:[],
}

declare type LoginResponse = {
    token:string;
    user: ApplicationUser;
}