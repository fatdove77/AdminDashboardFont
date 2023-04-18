import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { Card, Space, Typography ,Statistic,Table,Tag} from 'antd'
import React from 'react'
import { getOrders } from '../../../request/api'

//表格组件
import DashBoardTable from './DashBoardTable'
import Charts from './Charts'
import Features from './Features'
//卡片
import Cards from './Card'
function DashBoard() {

 
  return (
    <div>
      <Cards></Cards>
      <div className='cf_container'>
        <Features></Features>
        <Charts></Charts>
      </div>
      <DashBoardTable></DashBoardTable>
    </div>
  )
}

export default DashBoard