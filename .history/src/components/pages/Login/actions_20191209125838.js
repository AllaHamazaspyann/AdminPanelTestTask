import FetchApi from '../../../helpers/fetchAPI';

export const getLoggedUser = (values) => async dispatch => {
  console.log(values)
  try{
    const response = await FetchApi.post('http://localhost:4000/register', {
      email: values.email,
      password: values.password,
    });
    dispatch({
      type: "EMAIL_REGISTER",
      email: values.email,
    });
    console.log('response', response)
  }catch(e){
    console.log(e.message)
  }
}
