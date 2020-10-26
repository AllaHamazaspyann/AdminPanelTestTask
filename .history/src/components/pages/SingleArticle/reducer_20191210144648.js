
const initialState = {
  email: '',
  password: '',
  user: {
    email: '',
    password: '',
    nickname: '',
    id: ''
  }
}

export const profile = (state=initialState, action) => {
  switch (action.type) {
    case 'USER_CREDENTIALS_EMAIL': {
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