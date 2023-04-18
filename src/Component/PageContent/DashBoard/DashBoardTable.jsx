import React,{useEffect,useState} from 'react'
import {useDashBoard} from '../../../hooks/useDashBoard'
import { Table } from 'antd';
import { getOrders } from '../../../request/api';
//scss
import './style.scss'
function DashBoardTable() {
  const {columns,data,loading} = useDashBoard();
  console.log(columns,data);
  return (
    <div className="dashtable">
      <div className="title">Latest Transactions</div>
      <Table 
        columns={columns} 
        dataSource={data} 
        loading = {loading}
        pagination = {true} >
      </Table>
    </div>
  )
}

export default DashBoardTable