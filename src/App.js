import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar'
import AddUser from './Pages/User/AddUser';
import Edit from './Pages/User/Edit';
import User from './Pages/User/User';

function App() {
  return (
    <div className="app">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users/:id' element={<User/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
