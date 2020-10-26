export const postAction = () => {
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