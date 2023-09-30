import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
    const [userData, setUserData] = useState({email: "", Password: "", confirmpassword: ""});
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Email :</label> <br />
                <input name='email' type="email" onChange={handleChange} /> <br />
                <label>Password :</label> <br />
                <input name='password' type="password" onChange={handleChange} /> <br />
                <label>ConfirmPassword :</label> <br />
                <input name='confirmpassword' type="ConfirmPassword" onChange={handleChange} /> <br />
                <input type="submit" value="login here"/>
            </form>
        </div>
    )
}

export default Login1;