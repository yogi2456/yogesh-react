import React from 'react'

const ChildrenProp = () => {
    return (
        <>
            <Yogesh>This is h1</Yogesh>
            <Button>Message</Button>
        </>
    )
}

const Button = ({ children }) => {
    return (
        <button>{children}</button>
    )
}

const Yogesh = ({ children }) => {
    return (
        <>
            <h1>{children}</h1>
            <h1>{children}</h1>
            <h1>{children}</h1>
        </>
    )
}

export default ChildrenProp;