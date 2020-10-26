
const initialState = {
  article: {
    title: '', 
    main_text: '', 
    created_at: '',
    author: '',
    category: '',
  }
}

export const articles = (state=initialState, action) => {
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