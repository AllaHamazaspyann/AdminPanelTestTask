import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar';
import * as S from './styles';

const { Header, Content, Sider } = Layout;

const InnerPage = ({ children }) => {
  return (
    <Layout>
      <Sider><Sidebar /></Sider>
      <Layout>
        <Header className="site-layout-background">

        </Header>
        <Content style={S.content}>
            {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default InnerPage;