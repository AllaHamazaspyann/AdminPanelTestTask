import FetchApi from '../../../helpers/fetchAPI';

export const getUserInfo = (email, password) => async dispatch => {
  try{
     const response = await FetchApi.get(`http://localhost:4000/register?email=${email}&password=${password}`);
    dispatch({
      response: response[0],


      type: "USER_CREDENTIALS_EMAIL",
      email: values.email,
      password: values.password,
    })
  }catch(e){
    console.log(e);
  }
}

