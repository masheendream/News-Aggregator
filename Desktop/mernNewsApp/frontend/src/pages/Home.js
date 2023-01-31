import { useEffect } from 'react'
import { useContentContext } from '../hooks/useContentContext'

import ContentDetails from '../components/contentDetails'
const Home = () => {
    //const [content, setContent] = useState(null)
    const {content, dispatch} = useContentContext()

    useEffect(() => {
        const fetchContent = async () => {
            const response = await fetch('/api/content')
            const json = await response.json()

            if (response.ok){
            //setContent(json)
            dispatch({type: 'SET_CONTENT', payload: json })
            }
        }
        fetchContent()
    }, [])
    
    return (
    <div className="home">
        <div className="content">
            {content && content.map((content) => (
                //<p key={content._id}>{content.title} </p>   // previous to test
                <ContentDetails key={content._id} content={content} />
            ))}
        </div>
    </div>
    )
}

export default Home