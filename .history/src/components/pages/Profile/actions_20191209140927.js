import FetchApi from '../../../helpers/fetchAPI';

export const getUserInfo = (email, password) => async dispatch => {
  console.log(email, password);
  try{
     const response = await FetchApi.get(`http://localhost:4000/register?email=${email}&password=${password}`);
     console.log('response', response);
    dispatch({
      type: 'USER_CREDENTIALS',
      response: response[0],
    })
  }catch(e){
    console.log(e);
  }
}

