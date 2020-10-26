import React from "react";
import { 
  RiseOutlined, 
  UsergroupAddOutlined, 
  ApartmentOutlined, 
  UserOutlined, 
  ShoppingCartOutlined,
  CoffeeOutlined
} from '@ant-design/icons';

export const menuItems = [
  {
    name: 'Homepage',
    icon: <RiseOutlined/>,
    isCollapsable: false
  },
  {
    name: 'Users',
    icon: <UsergroupAddOutlined />,
    isCollapsable: false
  },
  {
    name: 'Premium Users',
    icon: <UsergroupAddOutlined />,
    isCollapsable: false
  },
  {
    name: 'Restaurants',
    icon: <ApartmentOutlined />,
    isCollapsable: false
  },
  {
    name: 'Learn',
    icon: <UserOutlined style={{marginLeft: '20px', display: 'inline-block'}}/>,
    isCollapsable: true,
    subItems: ['Quick Start', 'Recipes', 'Books', 'Movies', 'Dietician']
  },
  {
    name: 'Shop',
    icon: <ShoppingCartOutlined />,
    isCollapsable: false
  },
  {
    name: 'Cuisine',
    icon: <CoffeeOutlined />,
    isCollapsable: false
  },
  {
    name: 'Post',
    icon: <CoffeeOutlined />,
    isCollapsable: false
  }
]