import React from "react";

const Mapping = ({names, kuchbhi}) => {
    //console.log(props)

    //const { names, kuchbhi} = props;
    console.log(names, kuchbhi)

    return (
        <div>
            <h1>Mapping</h1>
            {names.map((name, i) => (
                <div key={i}>
                    <h1>{name}</h1>
                </div>

            ))}
        </div>
    )
}

export default Mapping;