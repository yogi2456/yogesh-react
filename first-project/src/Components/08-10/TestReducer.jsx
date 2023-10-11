import React, { useReducer } from 'react'

const initialState = { count : 0, userName: "yogesh"};

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count - 1}
        case "RESET":
            return {...state, count: 0}
        default:
            return state;            
    }
}

function TestReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function Increment () {
        dispatch({ type: "INCREMENT"})
    }
    function Decrement () {
        dispatch({ type: "DECREMENT"})
    }
    function Reset () {
        dispatch({ type: "RESET"})
    }

  return (
    <div>
      <h1>counter : {state.count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>RESET</button>
    </div>
  )
}

export default TestReducer
