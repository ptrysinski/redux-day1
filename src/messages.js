const SEND = 'messages/SEND'

export const sendActionCreator = (receiver, text) => ({
    type: SEND,
    receiver,
    text,
})

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEND:
            return {
                ...state,
                [action.receiver]: action.text
            }
        default:
            return state
    }
}