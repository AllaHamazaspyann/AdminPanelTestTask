import FetchApi from '../../../helpers/fetchAPI';

export const getUserInfo = (arg) => async dispatch => {
  try{
     const response = await FetchApi.get(`http://localhost:4000/register?email=${arg.email}`)
    dispatch({
      type: 'USER_CREDENTIALS',
      response: response[0],
    })
  }catch(e){
    console.log(e);
  }
}

export const editCredentials = () => async dispatch => {
  console.log('hey');
  try{
    // const response = await FetchApi.get(`http://localhost:4000/register?email=${arg.email}`)
   dispatch({
     type: 'USER_CREDENTIALS',
    //  response: response[0],
   })
  }catch(e){
   console.log(e);
  }
}