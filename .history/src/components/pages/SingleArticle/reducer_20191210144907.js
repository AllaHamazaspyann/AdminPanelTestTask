
const initialState = {
  user: {
    email: '',
    password: '',
    nickname: '',
    id: ''
  }
}

export const profile = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_SINGLE_ARTICILE': {
      return {
        ...state,
        email: action.email,
        password: action.password,
      }
    }
    default: {
      return state
    }
  }
}