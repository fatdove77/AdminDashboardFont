import React from 'react'
import './style.scss'
import logo from '@/public/img/logo.jpg'
import { Badge, Space, Typography } from 'antd'
import {MailOutlined,BellOutlined} from '@ant-design/icons'
function AppHeader() {
  return (
    <div className="AppHeader">
      <img src={logo} alt="" />
      <Typography.Title  style = {{marginBottom:"0"}}>Fatdove Admin DashBoard</Typography.Title>
      <Space>
        <Badge count = {10} dot> 
          <MailOutlined style = {{fontSize:"24px"}} />
        </Badge>
        <Badge count = {10}>
          <BellOutlined style = {{fontSize:"24px"}}/>
        </Badge>
        
      </Space>
    </div>
  )
}

export default AppHeader