import FetchApi from '../../../helpers/fetchAPI';

export const getArticles = (articleId) => async dispatch => {
  try{
    const response = await FetchApi.get(`http://localhost:4000/posts/${articleId}`);
    dispatch({
      type: 'GET_SINGLE_ARTICILE',
      articles: response,
    })
  }catch(e){
    console.log(e.message);
  }
}
