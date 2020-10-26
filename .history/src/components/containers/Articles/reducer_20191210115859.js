
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
        article: {
          ...state.article,
          title: action.article.
        }
      }
    }
    default: {
      return state
    }
  }
}