import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter, selectFilteredSizes } from './productSlice'

function SizeButton({size}) {
    const dispatch = useDispatch();
    const filteredSizes = useSelector(selectFilteredSizes)
    const active = filteredSizes.includes(size)
    {/* inline style that makes sense (dynamic styles) */}
    const style = {
        cursor: 'pointer',
        background: active ? '#000' :'#ddd',
        color: active ? '#fff' : '#000',
        fontWeight: 200,
        width: '30px',
        height: '30px',
        fontSize: '10px',
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px'
    }
    return <li onClick={() => dispatch(toggleFilter(size))} style={style}>{size}</li>
}

export function Sizes() {
    const sizeList = [
        'XS', 'SM', 'M', 'LG', 'XL', 'XXL'
    ]
    return <div>
        <h2>Sizes:</h2>
        {/* use css - just an example */}
        <ul style={{display: 'flex', flexWrap: 'wrap', width: '200px'}}>
            {sizeList.map(size => <SizeButton size={size} />)}
        </ul>
    </div>
}