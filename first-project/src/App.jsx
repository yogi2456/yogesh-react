import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Login from './Components/Login';
import Counter from './Components/Counter';
import Effect1 from './Components/13-09/Effect1';
import Effect2 from './Components/13-09/Effect2';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path ='/' element={<Homepage />} />
      <Route path ='/login' element={< Login />} />
      <Route path ='/profile' element={< Profile />} />
      <Route path ='/Register' element={< Register />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/profile' element={<Profile />} />
      <Route exact path='/counter' element={<Counter />} />
      <Route exact path='/Effect1' element={<Effect1 />} />
      <Route exact path='/Effect2' element={<Effect2 />} />
     </Routes>
    </div>
  );
}

export default App;
