import React from 'react'
import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Card, Space, Typography ,Statistic,Table,Tag} from 'antd'
import './style.scss'
function Cards() {
   //上方卡片
   const DashBoardCard = (props)=>{
    return (
    <Card className='card'>
        <Space>
          {props.icon}
          <Statistic title = {props.title} value = {props.value}></Statistic>
        </Space>
      </Card>
    )
  }
  return (
    <div className="cards">
        <DashBoardCard 
          icon = {
            <ShoppingCartOutlined 
              style = {{
                color:'green',
                backgroundColor:'rgba(0,255,0,0.25)',
                borderRadius:'20px',
                fontSize:'24px',
                padding:'8px'
              }} 
            />
            } 
          title = {"Orders"} 
          value = {12345}
          ></DashBoardCard>
        <DashBoardCard 
          icon = {
            <ShoppingOutlined 
              style = {{
                color:'purple',
                backgroundColor:'rgba(0,0,255,0.25)',
                borderRadius:'20px',
                fontSize:'24px',
                padding:'8px'
                }} 
            />}
          title = {"Inventory"} 
          value = {12345}
          ></DashBoardCard>
        <DashBoardCard 
          icon = {
            <UserDeleteOutlined 
              style = {{
                color:'yellow',
                backgroundColor:'rgba(255,0,0,0.25)',
                borderRadius:'20px',
                fontSize:'24px',
                padding:'8px'
                }} 
              />} 
          title = {"Customer"} 
          value = {12345}
          ></DashBoardCard>
        <DashBoardCard 
          icon = {
            <DollarCircleOutlined 
              style = {{
                color:'blue',
                backgroundColor:'rgba(0,125,100,0.25)',
                borderRadius:'20px',
                fontSize:'24px',
                padding:'8px'
                }} 
              />} 
          title = {"Revenue"} 
          value = {12345}>
          </DashBoardCard>
    </div>
  )
}

export default Cards