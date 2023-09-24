import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Login from './Components/Login';
import Counter from './Components/Counter';
import Effect1 from './Components/13-09/Effect1';
import Effect2 from './Components/13-09/Effect2';
import Effect3 from './Components/15-09/Effect3';
import Effect4 from './Components/15-09/Effect4';
import Params from './Components/15-09/Params';
import SingleProduct from './Components/15-09/SingleProduct';

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
      <Route exact path='/Effect3' element={<Effect3 />} />
      <Route exact path='/Effect4' element={<Effect4 />}/>
      <Route exact path='/Params' element={<Params />} />
      <Route exact path='/SingleProduct' element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
