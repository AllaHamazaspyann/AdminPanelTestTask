import FetchApi from '../../../helpers/fetchAPI';

export const getUserInfo = (email, password) => async dispatch => {
  console.log(arg)
  try{
     const response = await FetchApi.get(`http://localhost:4000/register?email=${arg.email}&password=${arg.password}`);
     console.log('response', response);
    dispatch({
      type: 'USER_CREDENTIALS+hey',
      // response,
    })
  }catch(e){
    console.log(e);
  }
}

export const editCredentials = () => async dispatch => {
  // console.log('hey');
  try{
    // const response = await FetchApi.get(`http://localhost:4000/register?email=${arg.email}`)
   dispatch({
     type: 'EDIT_USER_CREDENTIALS',
    //  response: response[0],
   })
  }catch(e){
   console.log(e);
  }
}