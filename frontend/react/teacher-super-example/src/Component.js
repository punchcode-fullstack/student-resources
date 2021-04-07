import { useParams } from 'react-router-dom'
import ObjectViewer from './ObjectViewer'
export default function Component(props) {
    const params = useParams()
    const propInjectionOrThroughHook = params.id ? params : props
    return <div>
        <ObjectViewer label={'from router...'} object={propInjectionOrThroughHook} />
    </div>
}