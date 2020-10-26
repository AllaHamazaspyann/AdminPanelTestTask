import React from 'react';
import { Typography } from 'antd';

import InnerPage from '../InnerPage';
import AddUser from '../../components/Containers/AddUser';

const Add = () => {
  const { Title } = Typography;
  return (
    <InnerPage>
        <Title level={5} style={{ margin: '20px 0' }}>New User</Title>
        <AddUser/>
    </InnerPage>
  )
}

export default Add;