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
// import SingleProduct from './Components/15-09/SingleProduct';
import Mapping from './Components/16-09/Mapping';
import Ternary from './Components/16-09/Ternary';
import { useState } from 'react';
import StyledComponents from './Components/16-09/StyledComponents';
//import Counterse from './Components/16-09/Counterse';
import DynamicStyles from './Components/20-09/DynamicStyles';
import ChildrenProp from './Components/22-09/ChildrenProp';
import Register2 from './Components/22-09/Register2';
import ClassComponent from './Components/29-09/ClassComponent';
import Login1 from './Components/30-09/Login1';
import Products from './Components/30-09/Products';
import OneProduct from './Components/01-10/OneProduct';
import AddProduct from './Components/04-10/AddProduct';
import UseMemo from './Components/06-10/UseMemo';
import UseCallback from './Components/07-10/UseCallback';
import UseReducer from './Components/08-10/UseReducer';
import TestReducer from './Components/08-10/TestReducer';
import Customhook from './Components/13-10/Customhook';
import CustomHookLs from './Components/13-10/CustomHookLs';
import YourProducts from './Components/YourProducts';
import UpdateProduct from './Components/UpdateProduct';
import Navbar from './Components/Common/Navbar';
import Cart from './Components/Cart';
import Calculator from './Components/Calculator';
import Sign from './Components/Sign'

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar/>
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
      {/* <Route exact path='/SingleProduct' element={<SingleProduct />} /> */}
      <Route exact path='/Mapping' element={<Mapping kuchbhi={'Hii'} names={["rahul", "raj", "karan", "sagar", "ram"]} />} />
      <Route exact path='/Ternary' element={<Ternary loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route exact path='/StyledComponents' element={<StyledComponents />} />
      {/* <Route exact path='/Counterse' element={<Counterse />} /> */}
      <Route exact path='/Dynamic-Styles' element={<DynamicStyles />} />
      <Route exact path='/ChildrenProp' element={<ChildrenProp />} />
      <Route exact path='/Register2' element={<Register2 />} />
      <Route exact path='/ClassComponent' element={<ClassComponent />} />
      <Route exact path='/Login1' element={<Login1 />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/oneproduct/:id' element={<OneProduct />} />
      <Route exact path='/add-product' element={<AddProduct />} />
      <Route exact path='/UseMemo' element={<UseMemo />} />
      <Route exact path='/UseCallback' element={<UseCallback />} />
      <Route exact path='/UseReducer' element={<UseReducer />} />
      <Route exact path='/TestReducer' element={<TestReducer />} />
      <Route exact path='/CustomHook' element={<Customhook />} />
      <Route exact path='/CustomHookLs' element={<CustomHookLs />} />
      <Route exact path='/your-products' element={<YourProducts />} />
      <Route exact path='/update-product/:id' element={<UpdateProduct />} />
      <Route exact path='/cart' element={<Cart />} />
      <Route exact path='/calculator' element={<Calculator/>} />
      <Route exact path='/sign' element={<Sign/>} />
      </Routes>
    </div>
  );
}

export default App;
