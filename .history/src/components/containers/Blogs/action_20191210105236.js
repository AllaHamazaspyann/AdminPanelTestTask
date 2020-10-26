import FetchApi from '../../../helpers/fetchAPI';

export const postAction = () => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/posts', {
      "title": "",
      "main_text": "mainText",
      "created_date": "created_date",
      "author_name": "author_name",
      "category": "category",
      "comment": "",
    });
    console.log('response', response);
    return dispatch({
      type: 'POST_BLOG'
    })
    
  }catch(e){
   console.log(e);
 }
}