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

export const handleCommentChange = (e) => {
  return({
    type: 'HANDLE_COMMENT_CHANGE',
    data: e.target.value,
  }) 
}

export const makeComment = (articleId) => async (dispatch, getState) => {
  const { singleArticle: {commentValue} } = getState();

  try{
    const response = await FetchApi.post('http://localhost:4000/comments', {
      postId: articleId,
      body: commentValue,
    });

    console.log('response', response);
    dispatch({
      type: 'GET_SINGLE_ARTICILE',
      article: response,
    })
  }catch(e){
    console.log(e.message);
  }
}


