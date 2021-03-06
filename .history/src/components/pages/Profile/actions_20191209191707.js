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

export const editUserInfo = (values) => async (dispatch, getState) => {
  const {profile: {user}} = getState();
  try{
    const response = await FetchApi.put(`http://localhost:4000/register/${user.id}`, {
      nickname: values.nickname,
      password: values.password, 
    });
 }catch(e){
   console.log(e);
 }
}

