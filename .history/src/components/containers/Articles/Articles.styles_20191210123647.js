import styled from 'styled-components';

export const Contained = styled.div`
  width: 350px;
  margin: auto;
  h2{
    text-align: center;
    color: #584949;
  }
`
export const ArticleWrapper = styled.div`
  box-shadow: 0 0 18px 2px #d5d5d5;
  border-radius: 5px;
  padding: 12px;
  text-align: center;
  margin: 16px 0;
  background-color: #eeebe1;
  max-width: 350px;
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
width: 100px;
display: block;
text-decoration: none;
color: #433f3f;
border-radius: 4px;
margin-left: auto;
margin-right: 45px;
`