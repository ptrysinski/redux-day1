import { createStore, combineReducers } from 'redux'


import messages, {sendActionCreator} from './messages'
import counter, {incActionCreator, decActionCreator} from './counter' 

const reducer = combineReducers({
    counter,
    messages,
    
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



store.dispatch(incActionCreator())
store.dispatch(decActionCreator())


const message1 = sendActionCreator('Piotr', 'witaj!')
const message2 = sendActionCreator('Somebody', 'żegnaj!')

store.dispatch(message1)
store.dispatch(message2)
store.dispatch({
    type: 'messages/SEND',
    receiver: 'Ala',
    text: 'Ma kota',
})

export const sendMessage = (receiver, text) => (
    store.dispatch(
        sendActionCreator(receiver, text)
    )
)

