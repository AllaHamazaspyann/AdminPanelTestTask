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