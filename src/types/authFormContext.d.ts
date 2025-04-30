export type AuthFormContextType = {
    login: boolean;
    register: boolean;
    forget: boolean;
    password: boolean;
    newPassword: boolean;
    getLogin: () => void;
    getRegister: () => void;
    closeAll: () => void;
    getForgetPassword: () => void;
    getSetPassword: () => void;
    setNewPass: () => void;
  };
  