
const initialState = {
  articles: [],
  order: 1,
  search_value: ''
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
        order: Number(action.data),
      }
    }
    case 'SEARCH_VALUE': {
      return{
        ...state,
        search_value: action.data
      }
    }
    default: {
      return state
    }
  }
}