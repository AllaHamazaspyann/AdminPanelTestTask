
const initialState = {
  single_article: {
    title: 
  }
}

export const singleArticle = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_SINGLE_ARTICILE': {
      return {
        ...state,
        single_article: action.article
      }
    }
    default: {
      return state
    }
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