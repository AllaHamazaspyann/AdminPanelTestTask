import FetchApi from '../../../helpers/fetchAPI';
import moment from 'moment';

export const postAction = (values) => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/posts', {
      title: "", 
      main_text: "", 
      created_at: "", author: "", category: ""
    });
    console.log('response', response);
    return dispatch({
      type: 'POST_BLOG'
    })
    
  }catch(e){
   console.log(e);
 }
}