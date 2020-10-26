
const initialState = {
  single_article: {
    title: '',
    main_text: '',
    author_name: '',
    category: '',
    created_at: ''
  },
  commentValue: ''
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
      console.log('action.data', action.data)
      return {
        ...state,
        commentValue: action.data,
      }
    }
    default: {
      return state
    }
  }
}