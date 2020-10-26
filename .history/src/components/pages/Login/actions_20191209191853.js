import FetchApi from '../../../helpers/fetchAPI';

export const getLoggedUser = (values) => async dispatch => {
  try{
    await FetchApi.get(`http://localhost:4000/register?email=${values.email}&password=${values.password}`);
    dispatch({
      type: "USER_CREDENTIALS_EMAIL",
      email: values.email,
      password: values.password,
    });
    localStorage.setItem('')
  }catch(e){
    console.log(e.message)
  }
}
