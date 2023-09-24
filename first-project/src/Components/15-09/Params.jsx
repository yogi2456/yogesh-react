import React from "react";
import { useNavigate } from "react-router-dom";


const Params = () => {

    const router = useNavigate();
    return (
        <div>
            <button onClick={() => router("/singleproduct/567894")}>go to single product</button>
        </div>
    )
}

export default Params;