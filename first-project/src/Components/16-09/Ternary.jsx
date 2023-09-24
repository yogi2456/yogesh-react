import React from "react";

const Ternary = ({loggedIn, setIsLoggedIn}) => {

    return (
        <div>
            <h1>Ternary Operator</h1>
            {loggedIn
            ? 
            <h1 onClick={() => setIsLoggedIn((prevalue) => !prevalue)}>Welcome.</h1>
            : 
            <button onClick={() => setIsLoggedIn((prevalue) => !prevalue)}>Please login</button>
            }
            {loggedIn && <h1>logged In</h1>}
        </div>
    )
}

export default Ternary;