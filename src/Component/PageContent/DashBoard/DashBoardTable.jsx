import React,{useEffect,useState} from 'react'
import { Pagination, Table } from 'antd';
import { getOrders } from '../../../request/api';
//scss
import './style.scss'
function DashBoardTable({columns,data,loading}) {
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