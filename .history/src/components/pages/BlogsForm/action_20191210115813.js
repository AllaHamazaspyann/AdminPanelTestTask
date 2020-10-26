import FetchApi from '../../../helpers/fetchAPI';
import moment from 'moment';

export const createArticle = (values) => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/posts', {
      title: values.title, 
      main_text: values.main_text, 
      created_at: moment().format(), 
      author: values.author, 
      category: values.category,
    });
    console.log('response', response);
   dispatch({
      type: 'POST_BLOG',
      r
    })
  }catch(e){
   console.log(e);
 }
}