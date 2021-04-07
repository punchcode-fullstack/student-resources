import { useState } from 'react'
// This button component has it's own state
// https://reactjs.org/docs/hooks-state.html
export default function Button() {
    // useState takes an initial state (here it is 0)
    // the function returns an array with two things.
    // [initialStateVariable, functionToChangeVariable]
    
    // in this case count is the initialStateVariable
    // setCount is the function that when called - changes count
    // when the state changes - react will:
    // update the element in the DOM that uses that piece of state
    // in our case - the button
    // const myStatefullThingy = useState(0)
    // const count = myStatefullThingy[0]
    // const setCount = myStatefullThingy[1]
    const [count, setCount] = useState(0)
    function handleCount() {
        ////////
        setCount(count + 1)
    }
    return <button onClick={handleCount}>{count}</button>
}