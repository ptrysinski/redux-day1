import {createStore} from 'redux'

const initialState = {
    number: 0,
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INC'){
        return {
            ...state,
            number: state.number + 1  
        }
    }else{
        return state
    }
}



export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
)

const incAction = {
    type: 'INC'
}

store.dispatch(incAction)