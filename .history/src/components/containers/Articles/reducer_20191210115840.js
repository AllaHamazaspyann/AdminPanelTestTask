
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
    case 'CREATE_ARTICLE': {
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