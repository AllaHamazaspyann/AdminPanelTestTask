import FetchApi from '../../../helpers/fetchAPI';

export const getArticles = (articleId) => async dispatch => {
  try{
    const response = await FetchApi.get(`http://localhost:4000/posts/${articleId}`);
    console.log('response', response);
    dispatch({
      type: 'GET_SINGLE_ARTICILE',
      article: response,
    })
  }catch(e){
    console.log(e.message);
  }
}

export const handle


