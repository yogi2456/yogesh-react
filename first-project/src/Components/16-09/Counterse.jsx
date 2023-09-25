import React from "react";
import { useEffect, useState } from "react";

const Counterse = () => {
    const [counter, setcounter] = useState(0);

    function UpdateCounter () {
        setcounter((prevValue) => prevValue + 1);
    }

    useEffect = (() => {
        if(counter === 10) {
            alert("HII")
        }

    }, [counter])


    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={UpdateCounter}>+</button>
        </div>
    )
}

export default Counterse;