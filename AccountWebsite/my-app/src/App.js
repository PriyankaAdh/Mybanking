import './App.css';
import Client from './components/client';
import Login from './components/login';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Welcome to My Bank
      </h3>
       <Routes>        
        <Route  exact path='/client' element={<Client />}/>  
        <Route  exact path='/' element={<Login />}/>        
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;