
const initialState = {
  articles: [],
  order: 1,
}

export const articles = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICILES': {
      return {
        ...state,
        articles: action.articles
      }
    }
    case 'ORDER_TYPE': {
      return {
        ...state,
        order: Number()action.data,
      }
    }
    default: {
      return state
    }
  }
}