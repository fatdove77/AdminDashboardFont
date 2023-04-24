import React, { useState } from 'react'
import logo from '@/public/img/logo.jpg'
import './style.scss'
import { Button } from 'antd'
import { useLocation,useNavigate } from 'react-router-dom'
import { useSingeUserTable,useUserTable } from '../../../hooks/useDashBoard'
import { useEffect } from 'react'
import Charts from '../DashBoard/Charts'
import DashBoardTable from '../DashBoard/DashBoardTable'
//表格数据
import { useDashBoard } from '../../../hooks/useDashBoard'
function Single() {
  const location  = useLocation();
  const navigate = useNavigate();
  const {data} = useUserTable();
  const {singleData,columns,loading} = useSingeUserTable();
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
          <Charts aspect={3/1} title = {"User Spending (Last 6 Months)"}></Charts>
        </div>
      </div>
      <div className="bottom">
        <DashBoardTable data = {singleData} columns = {columns} loading = {loading}></DashBoardTable>
      </div>
    </div>
  )
}

export default Single