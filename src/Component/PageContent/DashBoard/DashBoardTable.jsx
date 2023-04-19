import React,{useEffect,useState} from 'react'
import {useDashBoard} from '../../../hooks/useDashBoard'
import { Pagination, Table } from 'antd';
import { getOrders } from '../../../request/api';
//scss
import './style.scss'
function DashBoardTable() {
  const {columns,data,loading} = useDashBoard();
  const [current,setCurrent] = useState();
  console.log(columns,data);
  const handlePageChange = (page)=>{
    setCurrent(page)
  }
  return (
    <div className="dashtable">
      <div className="title">Latest Transactions</div>
      <Table 
      style = {{width: '100%'}}
        columns={columns} 
        dataSource={data} 
        loading = {loading}
        pagination = {{
          pageSize:5
        }}
        >
      </Table>
    </div>
  )
}

export default DashBoardTable