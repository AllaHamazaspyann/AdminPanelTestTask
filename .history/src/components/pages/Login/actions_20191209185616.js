import FetchApi from '../../../helpers/fetchAPI';

export const getLoggedUser = (values) => async dispatch => {
  try{
    const response = await FetchApi.get(`http://localhost:4000/register?email=${values.email}&password=${values.password}`);
    // console.log('response', response)
    dispatch({
      type: "USER_CREDENTIALS_EMAIL",
      email: values.email,
      password: values.password,
    });
    
  }catch(e){
    console.log(e.message)
  }
}
