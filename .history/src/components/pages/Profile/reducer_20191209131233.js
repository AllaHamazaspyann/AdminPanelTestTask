

const initialState = {
  email: '',
  password: '',
  nickname: '',
}

export const profile = (state=initialState, action) => {
  switch (action.type) {
    case 'USER_CREDENTIALS': {
      console.log(action.response)
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