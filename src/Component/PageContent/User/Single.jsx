import React, { useState } from 'react'
import logo from '@/public/img/logo.jpg'
import './style.scss'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import { useUserTable } from '../../../hooks/useDashBoard'
import { useEffect } from 'react'
function Single() {
  const location  = useLocation();
  const {data} = useUserTable();
  console.log(location.pathname.split('/')[2]);
  const [user,setUser] = useState(data.filter((item)=>{
    return item.id === location.pathname.split('/')[2]
  }));
  console.log(user);
  return (
    <div className="single">
      <div className="top">
        <div className="left">
          <div className="title">infomation</div>
          <Button type='primary'>edit</Button>
          <div className="item">
            <img src={logo} alt="" />
            <div className="flex  flex-col ">
            <div className="detail">{user[0].name}</div>
            <div className="detail">{user[0].age}</div>
            <div className="detail">{user[0].address}</div>
            </div>
          </div>
        </div>
        <div className="right">
          2
        </div>
      </div>
      <div className="bottom">
        3
      </div>
    </div>
  )
}

export default Single