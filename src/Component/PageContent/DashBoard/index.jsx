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
//hook
import { useDashBoard } from '../../../hooks/useDashBoard'
function DashBoard() {
const {data,columns,loading} = useDashBoard();
 
  return (
    <div className='dashboard'>
      <Cards></Cards>
      <div className='cf_container'>
        <Features></Features>
        <Charts title = {"Last 6 Months (Revenue)"} aspect={2/1}></Charts>
      </div>
      <DashBoardTable data = {data} columns={columns} loading = {loading}></DashBoardTable>
    </div>
  )
}

export default DashBoard