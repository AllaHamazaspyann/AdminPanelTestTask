
const initialState = {
  article: []]
}

export const articles = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICILES': {
      return {
        ...state,
        article: action.article
      }
    }
    default: {
      return state
    }
  }
}