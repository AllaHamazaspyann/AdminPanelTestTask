import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

export const Contained = styled.div`
  width: 350px;
  margin: auto;
  h2{
    text-align: center;
    color: #584949;
  }
`
export const Save = styled.input`
  background-color: #2929d2;
  padding: 10px 16px;
  border-radius: 6px;
  color: #fff;
  border: 1px solid #2929d2;
  cursor: pointer;
  &:focus{
    outline: none;
  }
`
export const Container =styled.div`
  width: 90%;
  margin: auto;
  padding:20px 0;
  display: flex;
  justify-content: space-between;
  h2{
    color: #584949;
  }
`
export const Item = styled.div`
  border: 1px solid;
  &:nth-child(1){
    flex-basis: 20%;
  }
`
export const LogoutBlock = styled(Link)`
  font-size: 22px;
  color: #484848;
  text-decoration: none;
`
export const Error = styled.div`
  font-size: 12px;
  color: #d11124;
  margin-bottom: 4px;
`
export const SimpleForm = styled.form`
  width: 100%;
  text-align: center;
`
export const Form = styled(Formik)`
  background-color: #fff;
  padding: 40px 50px 80px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px -7px;
  margin-top: 0;
  width: 400px;
  h1{
    margin: 20px 0;
  }
`
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 4px;
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  ${({errBorder}) => errBorder ? 'border-color: #ec5656f2' : 'border-color: #bdbdbd'}
  &:focus{
    outline: none;
    box-shadow: none;
    ${({errBorder}) => errBorder ? 'border-color: #8f8d8d' : 'border-color: #a6a0a0'}
  }
`
export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 8px 4px;
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  ${({errBorder}) => errBorder ? 'border-color: #ec5656f2' : 'border-color: #bdbdbd'}
  &:focus{
    outline: none;
    box-shadow: none;
    ${({errBorder}) => errBorder ? 'border-color: #8f8d8d' : 'border-color: #a6a0a0'}
  }
`


