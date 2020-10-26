import React from "react";
import { Menu } from 'antd';

import { menuItems } from './menuItems';
import * as S from './styles';

const MenuItemGroup = Menu.ItemGroup;

const Sider = () => {
  return (
    <Menu
      theme='dark'
      mode="inline"
      style={{ paddingTop: '70px' }}
    >
      {menuItems.map(item => {
        return item.isCollapsable ?
          (<>
            {item.icon}
            <MenuItemGroup title={item.name} style={{ marginLeft: '40px' }}>
              {item.subItems.map(subItem => (
                <Menu.Item key="9">{subItem}</Menu.Item>
              ))}
            </MenuItemGroup>
          </>
          )
          :
          (<div key={item.name} style={S.menuItem}>
            {item.icon}
            <Menu.Item style={{ marginLeft: '20px' }}>{item.name}</Menu.Item>
          </div>)

      })}
    </Menu>
  );
}

export default Sider;