import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import { Button } from 'react-bootstrap';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
  <Link to={'/add'}><Button>Add</Button></Link>  
  <Link to={'/'}><Button>Home</Button></Link>  
  

  <Routes>
   <Route path='/' element={<Home/>}  />
   <Route path='/edit' element={<Edit/>}  />
   <Route path='/add' element={<Add/>}  />
   <Route path='*' element={<Error/>}  />



  </Routes>
    </div>
  );
}

export default App;
