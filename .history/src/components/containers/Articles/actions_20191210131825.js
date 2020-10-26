import FetchApi from '../../../helpers/fetchAPI';

export const getArticles = () => async dispatch => {
  try{
    const response = await FetchApi.get('http://localhost:4000/posts');
    console.log('response', response);

    dispatch({
      type: 'GET_ARTICILES',
      articles: response,
    })
  }catch(e){
    console.log(e.message);
  }
}

export const handleOrderChange = (e) => {
  console.log(e.target)
}