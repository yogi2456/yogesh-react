import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Homepage () {

    const router = useNavigate();

    function routerToLogin() {
        router("/login")
    }

    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={() => router('/register')}>Go to Register</button>
            <button onClick={() => router('/Profile.')}>Go to Profile</button>
            <button onClick={() => router('/counter')}>GO to counter</button>
            <button onClick={() => router('/Effect1')}>Effect1</button>
            <button onClick={() => router('/Effect2')}>Effect2</button>
            <button onClick={() => router('/Effect3')}>Effect3</button>
            <button onClick={() => router('/Effect4')}>Effect4</button>
            <button onClick={() => router('/Params')}>Params</button>
            <button onClick={() => router('/SingleProducts')}>SingleProducts</button>
            <button onClick={() => router('/Counterse')}>Counterse</button>
            <button onClick={() => router('/Mapping')}>Mapping</button>
            <button onClick={() => router('/Ternary')}>Ternary</button>
            <button onClick={() => router('/StyledComponents')}>StyledComponents</button>
            <button onClick={() => router('/Dynamic-Styles')}>DynamicStyles</button>
            <button onClick={() => router('/ChildrenProp')}>ChildrenProp</button>
            <button onClick={() => router('/Register2')}>Register2</button>
            <button onClick={() => router('/ClassComponent')}>ClassComponent</button>
            <button onClick={() => toast.error ("Clicked")}>Click for toast error</button>
            <button onClick={() => toast.success ("Clicked")}>Click for toast success</button>

        </div>
    )
}

export default Homepage;