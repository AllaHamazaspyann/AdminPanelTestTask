

const initialState = {
  email: '',
  user: {

  }
}

export const profile = (state=initialState, action) => {
  switch (action.type) {
    case 'USER_CREDENTIALS_EMAIL': {
      return {}
    }
    case 'USER_CREDENTIALS': {
      // console.log('action.response', action.response);
      return {
        ...state,
        user: {
          ...state.user,
          email: action.response.email,
          password: action.response.password,
          nickname: action.response.nickname,
        }
      }
    }
    default: {
      return state
    }
  }
}