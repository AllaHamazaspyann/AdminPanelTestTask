

const initialState = {
  email: '',
  password: '',
  nickname: '',
}

export const profile = (state=initialState, action) => {
  switch (action.type) {
    case 'USER_CREDENTIALS': {
      
      return {
        ...state,
        email: action.response.email,
        password: action.response.password,
        nickname: action.response.nickname,
      }
    }
    default: {
      return state
    }
  }
}