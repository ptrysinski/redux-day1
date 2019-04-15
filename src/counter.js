//action types
const INC = 'counter/INC'
const DEC = 'counter/DEC'

//action creators
export const incActionCreator = () =>({
  type: INC
})

export const decActionCreator = () =>({
  type: DEC
})

//initial state
const initialState = {
  number: 0,
}

//reducer
export default (state = initialState, action) => {
  console.log(state, action)

  if (action.type === INC) {
    return {
      ...state,
      number: state.number + 1
    }
  }

  if (action.type === DEC) {
    return {
      ...state,
      number: state.number - 1
    }
  }

  return state
}