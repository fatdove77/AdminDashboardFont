import React from 'react'
import './style.scss'
import { Menu } from 'antd'
import {PieChartOutlined,DesktopOutlined,ContainerOutlined,MailOutlined,AppstoreOutlined} from '@ant-design/icons'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('DashBoard', 'Dashboard', <PieChartOutlined />),
  getItem('Inventory', 'Inventory', <DesktopOutlined />),
  getItem('Orders', 'Orders', <ContainerOutlined />),
  getItem('Customer', 'Customer', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
function SideMenu() {
  return (
    <div className="SideMenu">
       <Menu
       onClick = {(item)=>{
        //key
       }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
      />
    </div>
  )
}

export default SideMenu