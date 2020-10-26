import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';

import { 
    handleChange, 
    addUser, 
  } from './actions';
import * as S from '../styles';
import SuccessErrorModal from "../../SuccessErrorModal";

const layout = {
  labelCol: { offset: 3, span: 8 },
  wrapperCol: { offset: 3, span: 5 },
};

const inputStyle = {
  width: '300px',
  display: 'block',
  margin: '14px 0',
  borderRadius: '4px'
}

const AddUser = () => {
  const dispatch = useDispatch();
  
  const addUserState = useSelector(state => state.addUserState);
  const allUsersState = useSelector(state => state.allUsersState);
  const { success } = allUsersState;
  const { singleUser } = addUserState;

  return (
      <div style={S.container}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={() => dispatch(addUser(singleUser))}>
        <Input
          name="name"
          placeholder="Jake Baw"
          onChange={(e) => dispatch(handleChange(e, "name"))}
          style={inputStyle} 
          />
        <Input
          name="email"
          placeholder="JakeBaw@gmail.com"
          onChange={(e) => dispatch(handleChange(e, "email"))}
          style={inputStyle} />
        <Input
          name="location"
          placeholder="New York, NY, USA"
          onChange={(e) => dispatch(handleChange(e, "location"))}
          style={inputStyle} />
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
          { success && <SuccessErrorModal success={success} url="users" refresh={false}/> }
      </div>
  )
}

export default AddUser;