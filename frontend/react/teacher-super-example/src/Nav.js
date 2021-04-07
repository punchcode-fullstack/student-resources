import { Link } from 'react-router-dom'

export default function Nav() {
    const links = [
        'product/1',
        'component',
        'other-way/1',
        'async',
        'broken',
        'complex',
    ]
    return (
        <nav>
            <ul style={{display: 'flex', listStyle: 'none', padding: 0}}>
                <li style={{marginRight: '10px'}}>
                    <Link to="/">Home</Link>
                </li>
                {links.map(item => <li style={{marginRight: '10px'}}><Link to={item ? `/${item}` : '/'}>{item}</Link></li>)}
            </ul>
        </nav>
    )
}