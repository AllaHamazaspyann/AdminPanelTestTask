import FetchApi from '../../../helpers/fetchAPI';

export const postAction = () => async dispatch => {
  try{
    const response = await FetchApi.post(`http://localhost:4000/posts`, {
      "title": "hey",
      "main_text": "mainText",
      "created_date": "created_date",
      "author_name": "author_name",
      

    });
    dispatch({
     type: 'USER_CREDENTIALS',
     response: response[0],
    })
  }catch(e){
   console.log(e);
 }
}