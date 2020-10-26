import FetchApi from '../../../helpers/fetchAPI';

export const getLoggedUser = (values) => async dispatch => {
  console.log('values :', values)
  try{
    const response = await FetchApi.get('http://localhost:4000/register?email=${value}', {
      email: values.email,
      password: values.password,
    });
    console.log('response', response)
    dispatch({
      type: "BLABLABLA",
      email: values.email,
    });
    
  }catch(e){
    console.log(e.message)
  }
}
