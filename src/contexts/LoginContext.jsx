import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {

  const [isLogin, setIsLogin] = useState(false);

  function toggleLogin() {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  }

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }, [])

  function Logout() {
    localStorage.removeItem("login");   
    window.location.replace("http://localhost:3000/login");
  }

  return (
    // vai 'prover' o que for passado no value para os filhos
    <LoginContext.Provider value={{ isLogin, setIsLogin, toggleLogin, Logout }}>
      {children}
    </LoginContext.Provider>
  )
}