import {createContext, useReducer} from 'react'

export const ContentContext = createContext()

export const contentReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CONTENT': 
            return {
                content: action.payload
            }
        case 'CREATE CONTENT':
            return{
                content: [action.payload, ...state.content]
            }
        default:
            return state
    }
}

export const ContentContextProvider  = ({ children }) => {

    const [state, dispatch] = useReducer(contentReducer, {
        content: null
    })

    return(
        <ContentContext.Provider value = {{...state, dispatch}}>
            { children }
        </ContentContext.Provider>
    )


}