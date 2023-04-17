import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Card, Space, Typography ,Statistic,Table,Tag} from 'antd'
import React from 'react'
import { getOrders } from '../../../request/api'

//表格组件
import DashBoardTable from './DashBoardTable'
function DashBoard() {

  //上方卡片
  const DashBoardCard = (props)=>{
    return (
    <Card>
        <Space>
          {props.icon}
          <Statistic title = {props.title} value = {props.value}></Statistic>
        </Space>
      </Card>
    )
  }
  return (
    <div>
      <Typography.Title Title = {4}>DashBoard</Typography.Title>
      <div className='flex justify-evenly' style = {{width:'80vw',padding:'1REM'}}>
        <DashBoardCard 
          icon = {
            <ShoppingCartOutlined 
              style = {{color:'green',backgroundColor:'rgba(0,255,0,0.25)',borderRadius:'20px',fontSize:'24px',padding:'8px'}} 
            />
            } 
          title = {"Orders"} 
          value = {12345}
          ></DashBoardCard>
        <DashBoardCard icon = {<ShoppingOutlined style = {{color:'purple',backgroundColor:'rgba(0,0,255,0.25)',borderRadius:'20px',fontSize:'24px',padding:'8px'}} />} title = {"Inventory"} value = {12345}></DashBoardCard>
        <DashBoardCard icon = {<UserDeleteOutlined style = {{color:'yellow',backgroundColor:'rgba(255,0,0,0.25)',borderRadius:'20px',fontSize:'24px',padding:'8px'}} />} title = {"Customer"} value = {12345}></DashBoardCard>
        <DashBoardCard icon = {<DollarCircleOutlined style = {{color:'blue',backgroundColor:'rgba(0,125,100,0.25)',borderRadius:'20px',fontSize:'24px',padding:'8px'}} />} title = {"Revenue"} value = {12345}></DashBoardCard>
      </div>
      
      <DashBoardTable/>
      
    </div>
  )
}

export default DashBoard