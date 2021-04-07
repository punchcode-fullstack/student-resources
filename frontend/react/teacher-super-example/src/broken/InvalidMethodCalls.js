import { useState } from 'react'
export default function InvalidMethodCalls() {
    const [state, setState] = useState({name: 'a'})
    // try {
    //     state.map()
    // } catch {
    //     throw new Error('this does not work yo... can not call map on objects...')
    // }
    return <div>
        {state.map(function (key) {
            console.log('oh please work I am so lost...')
            console.log('should this be a for loop or something?')
            return <h2>{key}</h2>
        })}
    </div>
}