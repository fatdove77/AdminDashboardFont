import React from 'react'
import './style.scss'
import { Menu } from 'antd'
import {PieChartOutlined,DesktopOutlined,ContainerOutlined,MailOutlined,AppstoreOutlined} from '@ant-design/icons'
import { useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react';
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
  getItem('DashBoard', '', <PieChartOutlined />),
  getItem('User', 'user', <DesktopOutlined />),
  getItem('Inventory', 'Inventory', <DesktopOutlined />),
  getItem('Orders', 'Orders', <ContainerOutlined />),
  getItem('Customer', 'Customer', <MailOutlined />),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  return (
    <div className="SideMenu">
      <div>
        <div className="title" >Fatdove</div>
        <Menu
        style = {{height:'80vh'}}
        key = {location.pathname.split("/")[1]} //key和路由相等
        // selectedKeys = {location.pathname.split("/")[1]}
        onClick = {(item)=>{
          //key
          navigate(item.key)
        }}
          defaultSelectedKeys={[location.pathname.split("/")[1]]}  //默认选中的key
          defaultOpenKeys={['sub2']}   //默认打开的key
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          items={items}
        />
        <div className="flex justify-center gap-1 mb-4  border-r border-solid border-gray-200  ">
        <span className="w-8 h-8 bg-black border border-solid border-gray-900 rounded-lg"></span>
        <span className="w-8 h-8 bg-white border border-solid border-gray-900 rounded-lg "></span>
        <span className="w-8 h-8 bg-pink-300 border border-solid border-gray-900 rounded-lg "></span>
        </div>
      </div>
       
      
    </div>
  )
}

export default SideMenu