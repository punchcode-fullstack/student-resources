export default function ObjectViewer(props) {
    return <div>
        <h2>{props.label}</h2>
        <pre style={{background: '#ddd', whiteSpace: 'wrap'}}>
            {JSON.stringify(props.object, null, 4)}
        </pre>
    </div>
}