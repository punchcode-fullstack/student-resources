import ObjectViewer from './ObjectViewer'
import { useState, useEffect } from 'react'

function HelperExample(props) {
    const [text, setText] = useState('')
    useEffect(() => {
        console.log('This is pretty useless....')
        setText(props.text)
    }, [props.text])
    return <h2>my text is: {props.text}</h2>
}

export default function ComplexComponent(props) {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    function handleClick() {
        setCount(count + 1)
    }
    return <div>
        <button onClick={(e) => setCount(count + 1)}>{count}</button>
        <button onClick={handleClick}>{count}</button>
        {text}
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <HelperExample text={text}/>
    </div>
}