import FetchApi from '../../../helpers/fetchAPI';
import moment from 'moment';

export const postAction = () => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/posts', {
  
    });
    console.log('response', response);
    return dispatch({
      type: 'POST_BLOG'
    })
    
  }catch(e){
   console.log(e);
 }
}