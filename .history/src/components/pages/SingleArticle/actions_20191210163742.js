import FetchApi from '../../../helpers/fetchAPI';
import moment from 'moment';

export const getArticles = (articleId) => async dispatch => {
  try{
    const response = await FetchApi.get(`http://localhost:4000/posts/${articleId}`);
    dispatch({
      type: 'GET_SINGLE_ARTICILE',
      article: response,
    })
  }catch(e){
    console.log(e.message);
  }
}

export const handleCommentChange = (e) => {
  return({
    type: 'HANDLE_COMMENT_CHANGE',
    data: e.target.value,
  }) 
}

export const makeComment = (articleId) => async (dispatch, getState) => {
  const { singleArticle: {commentValue} } = getState();

  try{
    await FetchApi.post('http://localhost:4000/comments', {
      articleId,
      body: commentValue,
      created_at: moment().format(),
    });
    dispatch({
      type: 'HANDLE_COMMENT_CHANGE',
      data: ''
    })
  }catch(e){
    console.log(e.message);
  }
}

export const getLatestComments = (articleId) => async dispatch => {
  try{
    const response = await FetchApi.get(`http://localhost:4000/comments/${articleId}`);
    console.log('response', response);
    dispatch({
      type: 'GET_ARTICLE_COMMENTS',
      article: response,
    })
  }catch(e){
    console.log(e.message);
  }
}

