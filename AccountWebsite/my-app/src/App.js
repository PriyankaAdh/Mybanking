import './App.css';
import Client from './components/client';

import {BrowserRouter, Routes ,Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Welcome to My Bank
      </h3>
       <Routes>        
        <Route  exact path='/' element={<Client />}/>     
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;