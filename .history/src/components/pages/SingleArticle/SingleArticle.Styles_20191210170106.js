import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticleWrapper = styled.div`
  box-shadow: 0 0 18px 2px #d5d5d5;
  border-radius: 5px;
  padding: 12px;
  text-align: center;
  display: block;
  color: #333;
  margin: 16px auto;
  background-color: #eeebe1;
  max-width: 350px;
  text-decoration: none;
  h2{
    color: rgb(84, 84, 84);
    font-size: 28px;
  }
`
export const Container = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  textarea{
    padding: 8px 4px;
    border-radius: 4px;
    margin-bottom: 8px;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    width: 300px;
    resize: none;
    height: 80px;
    &:focus{
      outline: none
    }
  }
`
export const Comment = styled.button`
  display: block;
  margin: auto;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #fabc7a;
  background-color: #fff;
  color: #d38b3e;
  font-weight: bold;
  cursor: pointer;
` 
export const Comments = styled.div`
  display: inline-block;
  border: 1px solid red;
`
export const 