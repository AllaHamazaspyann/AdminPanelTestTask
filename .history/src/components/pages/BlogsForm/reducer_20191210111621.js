
const initialState = {
 
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
    case 'USER_CREDENTIALS': {
      console.log('action.response.id', action.response.id);
      return {
        ...state,
        user: {
          ...state.user,
          email: action.response.email,
          password: action.response.password,
          nickname: action.response.nickname,
          id: action.response.id
        }
      }
    }
    default: {
      return state
    }
  }
}