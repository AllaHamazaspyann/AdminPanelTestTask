import FetchApi from '../../../helpers/fetchAPI';

export const getUserInfo = (email, password) => async dispatch => {
  try{
     const response = await FetchApi.get(`http://localhost:4000/register?email=${email}&password=${password}`);
    dispatch({
      type: 'USER_CREDENTIALS',
      response: response[0],
    })
  }catch(e){
    console.log(e);
  }
}

export const editUserInfo = () => async (dispatch, getState) => {
  const {profiel: {user}} = getState();
  try{
    await FetchApi.put(`http://localhost:4000/register/${id}`, {
      nickname: 
      password: 
    });
   dispatch({
     type: 'USER_CREDENTIALS',
     response: response[0],
   })
 }catch(e){
   console.log(e);
 }
}

