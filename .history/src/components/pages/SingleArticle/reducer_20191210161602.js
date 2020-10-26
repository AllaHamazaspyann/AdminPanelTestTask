
const initialState = {
  single_article: {
    title: '',
    main_text: '',
    author_name: '',
    category: '',
    created_at: ''
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
    case 'HANDLE_COMMENT_CHANGE': {
      return {
        ...state,
        
      }
    }
    default: {
      return state
    }
  }
}