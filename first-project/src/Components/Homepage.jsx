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
            <button onClick={() => router('/Effect1')}>Effect1</button>
            <button onClick={() => router('/Effect2')}>Effect2</button>
            <button onClick={() => router('/Effect3')}>Effect3</button>
            <button onClick={() => router('/Effect4')}>Effect4</button>
        </div>
    )
}

export default Homepage;