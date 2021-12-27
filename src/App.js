import './styles/App.css';
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import Menu from "./components/Menu"


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Menu/>
      <Routes/>  
    </div>
  </BrowserRouter>
  );
}

export default App;
