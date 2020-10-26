import FetchApi from '../../../helpers/fetchAPI';

export const postAction = () => async dispatch => {
  try{
    const response = await FetchApi.post(`http://localhost:4000/posts`, {
      "title": "hey",
      "mainText": "mainText",
      
    });
    dispatch({
     type: 'USER_CREDENTIALS',
     response: response[0],
    })
  }catch(e){
   console.log(e);
 }
}