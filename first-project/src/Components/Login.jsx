import { useNavigate } from "react-router-dom";

function Login () {
    const router = useNavigate();

    return (
        <div>
            <h1>this is login page</h1>
            <button onClick={() => router('/')}>Go to Homepage</button>
        </div>
    )
}

export default Login;