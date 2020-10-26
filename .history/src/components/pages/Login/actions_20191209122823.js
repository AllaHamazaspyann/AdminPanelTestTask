import FetchApi from '../../../helpers/fetchAPI';

export const getLoggedUser = (values) => async dispatch => {
  try{
    await FetchApi.post('http://localhost:4000/register', {
      email: values.email,
      password: values.password,
    });
    dispatch({
      type: "EMAIL_REGISTER",
      email: values.email,
    })
  }catch(e){
    console.log(e.message)
  }
}
