import React,{useEffect,useState} from 'react'
import useDashBoard from '../../../hooks/useDashBoard'
import { Table } from 'antd';
import { getOrders } from '../../../request/api';
function DashBoardTable() {
  const {columns,data,loading} = useDashBoard();
  console.log(columns,data);
  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={data} 
        loading = {loading}
        pagination = {false} >
      </Table>
    </div>
  )
}

export default DashBoardTable