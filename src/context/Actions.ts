interface IuserStartLogin{
    email:string;
    password:string;
}
export const LoginStart = (userCredentials:IuserStartLogin) => ({
    type: "LOGIN_START"
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const Logout = () => ({
    type: "LOGOUT"
})

interface IUser{
    id:string;
    name:string;
    email:string;
    password:string;
}
export const LoginSuccess = (user:IUser) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

// Registrando usuario
interface IRegisterUser{
    email:string;
    password:string;
}
export const RegisterStart = (userInfo:IRegisterUser) => ({
    type: "REGISTER_START"
});

export const RegisterFailure = () => ({
    type: "REGISTER_FAILURE"
});

export const RegisterSuccess = (userInfo:IRegisterUser) => ({
    type: "REGISTER_SUCCESS"
});