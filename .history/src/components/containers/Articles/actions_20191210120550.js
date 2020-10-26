import FetchApi from '../../../helpers/fetchAPI';

export const getArticles = () => async dispatch => {
  try{
    const response = await FetchApi.get()
  }catch(e){
    console.log(e.message);
  }
}