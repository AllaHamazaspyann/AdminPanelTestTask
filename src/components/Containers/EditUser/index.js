import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Input,
  Button,
} from 'antd';

import {
  handleChange,
  editSingleUser,
  setSingleUser
} from './actions';
import SuccessErrorModal from '../../SuccessErrorModal';
import * as S from '../styles';

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

const EditUser = (props) => {
  const dispatch = useDispatch();

    const [state, setState] = useState({
        userLocalId: 0,
        user: {}
    });
  const { userId } = props;
  const editUserState = useSelector(state => state.editUserState);
  const allUsersState = useSelector(state => state.allUsersState);
  const { allUsers, success } = allUsersState;
  const { singleUser } = editUserState;
  const { user, userLocalId } = state;


  useEffect(() => {
    userId && localStorage.setItem("editedUserId", JSON.stringify(userId))
    setState({
      ...state,
      userLocalId: localStorage.getItem("editedUserId"),
      user: allUsers.find(user => user.id === Number(userLocalId))
    })
    dispatch(setSingleUser(user))
  }, [])

  return (
    <>
      <div style={S.container}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={() => dispatch(editSingleUser(userId, singleUser))}
       >

        <Input
          value={singleUser && singleUser.name}
          name="name"
          placeholder="Jake Baw"
          onChange={(e) => dispatch(handleChange(e, "name"))}
          style={inputStyle} />

        <Input
          value={singleUser && singleUser.email}
          name="email"
          placeholder="JakeBaw@gmail.com"
          onChange={(e) => dispatch(handleChange(e, "email"))}
          style={inputStyle} />
        <Input
          value={singleUser && singleUser.location}
          name="location"
          placeholder="New York, NY, USA"
          onChange={(e) => dispatch(handleChange(e, "location"))}
          style={inputStyle} />
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
      </div>
        { success && <SuccessErrorModal success={success} url="users" refresh={false}/> }
    </>
  );
};

export default EditUser;