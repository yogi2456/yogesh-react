import React from "react";
import styled from "styled-components";

const StyledComponents = () => {
    const Button = styled.button`
    color : red;
    background - color : blue;
    `;

    const H1 = styled.h1`
    font-size : 20px;
    `;

    return (
        <div style={{backgroundColor: "red"}}>
            <H1>Styled H1</H1>
            <Button>StyledComponents</Button>
        </div>
    )
}

export default StyledComponents;