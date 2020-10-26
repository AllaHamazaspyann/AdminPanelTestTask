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
export const handleChange = (e) => dispatch => {
  console.log('e.target.value', e.target.value);
  dispatch ({
    type: 'SEARCH_VALUE',
    data: e.target.value
  })
}

export const getSearchedArticle = (arg) => async (dispatch) => {
  console.log('arg', arg)
  try{
    const response  = await FetchApi.get(`http://localhost:4000/posts?title=${arg}`);
    console.log('response', response);
  }catch(e){
    console.log(e.message);
  }
}