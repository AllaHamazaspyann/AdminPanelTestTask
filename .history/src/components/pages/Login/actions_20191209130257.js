import FetchApi from '../../../helpers/fetchAPI';

export const getLoggedUser = (values) => async dispatch => {
  console.log('values :', values)
  // try{
  //   const response = await FetchApi.get('http://localhost:4000/register', {
  //     email: values.email,
  //     password: values.password,
  //   });
    dispatch({
      type: "BLAAAA",
      // email: values.email,
    });
  //   console.log('response', response)
  // }catch(e){
  //   console.log(e.message)
  // }
}