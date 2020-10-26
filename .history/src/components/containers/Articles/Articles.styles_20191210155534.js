import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Contained = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  h2{
    text-align: center;
    color: #584949;
  }
`
export const ArticleWrapper = styled(Link)`
  box-shadow: 0 0 18px 2px #d5d5d5;
  border-radius: 5px;
  padding: 12px;
  text-align: center;
  display: block;
  color: #333;
  margin: 16px 0;
  background-color: #eeebe1;
  max-width: 350px;
  text-decoration: none;
  .date{
    color: #f47c7c;
  }
  h2{
    color: rgb(84, 84, 84);
    font-size: 28px;
  }
`
export const Heading = styled.h1`
  text-align: center;
  color: #584949;
  font-size: 80px;
  position: relative;
  margin: 10px 0 30px;
  &:after{
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    background-color: #000;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`
export const AddArticle = styled(Link)`
  padding: 8px 10px;
  border: 1px solid #433f3f;
  width: 114px;
  display: inline-block;
  text-decoration: none;
  color: #433f3f;
  border-radius: 4px;
  margin-left: auto;
  margin-right: 45px;
`
export const Select = styled.select`
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 10px auto 40px;
  padding: 8px 4px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  &:focus{
    outline: none;
  }
`
export const Search = styled.input`
  width: 320px;
  padding: 8px 4px;
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-color: #bdbdbd;
  margin-right: 20px;
  &:focus{
    outline: none;
  }
`
export const SearchButton = styled.button`
  padding: 6px 8px;
  background-color: transparent;
  border: 1px solid transparent;
  font-weight: bold;
  border-radius: 4px;
  color: #dcb16b;
    font-size: 18px;
  &:focus{
    outline: none;
  }
`