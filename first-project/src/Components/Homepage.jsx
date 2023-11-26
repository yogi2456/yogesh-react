import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "./Context/GlobalContext";
import { AuthContext } from "./Context/AuthContext";

function Homepage () {

    // const { state, dispatch} = useContext(MyContext)

    const { state, Logout } = useContext(AuthContext)

    const router = useNavigate();

    function routerToLogin() {
        router("/login")
    }

    return (
        <div>
            <h1>Homepage</h1>
            {/* <h1>Counter : {state.counter}</h1>
            <button onClick={ () => dispatch({type: "INCREMENT"})}>+</button> */}
            <h1>User: {state?.user?.name}</h1>
            <button onClick={routerToLogin}>Go to Login</button> <br/>
            <button style={{backgroundColor: "red", color: "white"}} onClick={Logout}>Logout?</button> <br/>
            <button onClick={() => router('/register')}>Go to Register</button>
            <button onClick={() => router('/Profile.')}>Go to Profile</button>
            <button onClick={() => router('/counter')}>GO to counter</button>
            <button onClick={() => router('/Effect1')}>Effect1</button>
            <button onClick={() => router('/Effect2')}>Effect2</button>
            <button onClick={() => router('/Effect3')}>Effect3</button>
            <button onClick={() => router('/Effect4')}>Effect4</button>
            <button onClick={() => router('/Params')}>Params</button> <br/>
            <button onClick={() => router('/SingleProducts')}>SingleProducts</button>
            <button onClick={() => router('/Counterse')}>Counterse</button>
            <button onClick={() => router('/Mapping')}>Mapping</button>
            <button onClick={() => router('/Ternary')}>Ternary</button>
            <button onClick={() => router('/StyledComponents')}>StyledComponents</button>
            <button onClick={() => router('/Dynamic-Styles')}>DynamicStyles</button>
            <button onClick={() => router('/ChildrenProp')}>ChildrenProp</button>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => router('/Register2')}>Register2</button> <br/>
            <button onClick={() => router('/Products')}>Products</button>
            <button onClick={() => router('/ClassComponent')}>ClassComponent</button>
            <button onClick={() => toast.error ("Clicked")}>Click for toast error</button>
            <button onClick={() => toast.success ("Clicked")}>Click for toast success</button>

        </div>
    )
}

export default Homepage;