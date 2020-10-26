import FetchApi from '../../../helpers/fetchAPI';

export const getArticles = () => async dispatch => {
  try{
    const response = await FetchApi.get('http://localhost:4000/posts')
  }catch(e){
    console.log(e.message);
  }
}