import { useState } from 'react'

export default function Typo() {
    const [arr] = useState([1,2,3])
    return <div>
        {arr.map(item => <p>{item}</p>)}
        {/* {arr.map(item => {({a bunch of nonsense})})} */}
    </div>
}