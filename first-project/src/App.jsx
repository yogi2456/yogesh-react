import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path ='/' element={<Homepage />} />
      <Route path ='/login' element={< Loginin />} />
      <Route path ='/profile' element={< Profile />} />
      <Route path ='/Register' element={< Register />} />
     </Routes>
    </div>
  );
}

export default App;
