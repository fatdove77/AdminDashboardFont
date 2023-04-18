import React from 'react'
import {SearchOutlined,BulbOutlined,GlobalOutlined,BellOutlined,BarsOutlined,MessageOutlined,ExpandAltOutlined} from '@ant-design/icons'
import './style.scss'
import logo from '@/public/img/logo.jpg'
import { Avatar, Badge, Space } from 'antd';
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <GlobalOutlined className='icon'/>
            English 
          </div>
          <div className="item">
            <Badge count={1} dot offset={[-2,0]} size="small">
             <BulbOutlined className='icon' />
            </Badge >
          </div>
          <div className="item">
            <ExpandAltOutlined className='icon'/>
          </div>
          <div className="item">
          <Badge count={2} offset={[0,0]} size="small">
            <BellOutlined className='icon'/>
            </Badge>
          </div>
          <div className="item">
            <MessageOutlined className='icon'/>
          </div>
          <div className="item">
            <BarsOutlined className='icon'/>
          </div>
          <div className="item">
            <img src = {logo} ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar