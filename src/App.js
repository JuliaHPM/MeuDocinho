import './styles/App.css';
import Routes from './Routes/Routes'
import { BrowserRouter } from 'react-router-dom';
import Menu from "./components/Menu"
import { LoginContextProvider } from './contexts/LoginContext';

function App() {

  return (
    <BrowserRouter>
      <LoginContextProvider>
        <div className="App">
          <Menu />
          <Routes />
        </div>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;


// import { useContext, useEffect } from 'react';

// import Login from './pages/Login';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

