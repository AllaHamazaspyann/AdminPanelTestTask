import FetchApi from '../../../helpers/fetchAPI';

export const getArticles = () => async dispatch => {
  try{
    const response = await FetchApi.get('http://localhost:4000/posts');
    dispatch({
      type: 'GET_ARTICILES',
      articles: response,
    })
  }catch(e){
    console.log(e.message);
  }
}

export const handleOrderChange = (e) => {
  return ({
    type: 'ORDER_TYPE',
    data: e.target.value,
  })
}
export const handleChange = (e) => {
  console.log('action', e.target.value)
  return ({
    type: 'SEARCH_VALUE',
    data: e.target.value
  })
}

export const getSearchedArticle = () => async (dispatch, getState) => {
  const { articles: {search_value} } = getState();
  try{
    const response  = await FetchApi.get(`http://localhost:4000/posts?title=${search_value}`)
  }catch(e){
    console.log(e.message);
  }
}