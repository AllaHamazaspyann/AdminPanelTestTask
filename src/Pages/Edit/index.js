import React from 'react';
import { Typography } from 'antd';

import InnerPage from '../InnerPage';
import EditUser from '../../components/Containers/EditUser';

const Edit = (props) => {
  const { Title } = Typography;
  const {location: {userId}} = props;

  return (
    <InnerPage>
      <Title level={5} style={{margin: '20px 0'}}>Edit User</Title>
      <EditUser userId={userId}/>
    </InnerPage>
  )
}

export default Edit;