
const initialState = {
  articles: [],
  order: 
}

export const articles = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICILES': {
      return {
        ...state,
        articles: action.articles
      }
    }
    default: {
      return state
    }
  }
}