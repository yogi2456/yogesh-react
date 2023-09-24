import React, { useEffect, useState } from "react";

const Counterse = () => {
    const [counter, setcounter] = useState(0);

    function UpdateCounter () {
        setcounter((prevalue) => prevalue + 1);
    }

    useEffect = (() => {
        if(counter == 10) {
            alert("Hii")
        }

    }, [counter])


    return (
        <div>
            <h1>Counterse - {Counterse}</h1>
            <button onClick={UpdateCounter}>+</button>
        </div>
    )
}

export default Counterse;