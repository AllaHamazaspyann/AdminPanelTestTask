import FetchApi from '../../../helpers/fetchAPI';

export const postAction = () => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/posts', {
      "title": "Karbonara Spagetti",
      "main_text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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