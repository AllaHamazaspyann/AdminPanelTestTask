

const initialState = {
  user: {

  }
}

export const profile = (state=initialState, action) => {
  switch (action.type) {
    case 'USER_CREDENTIALS': {
      console.log('action.response', action.response);
      return {
        ...state,
        user: {
          ...state.user,
          

        }
      }
    }
    default: {
      return state
    }
  }
}