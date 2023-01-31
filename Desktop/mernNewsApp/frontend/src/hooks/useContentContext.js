import {ContentContext } from '../context/contentContext'
import {useContext} from 'react'

export const useContentContext = () => {
    const context = useContext(ContentContext)

    if(!context){
        throw Error('useContentContext  must be used inside of a ContentContextProvider')
    }

    return context
}