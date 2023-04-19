import React, { useEffect, useState ,useMemo} from 'react'
import { getOrders } from '../request/api';
import {Tag,Space,Button} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
export function useDashBoard() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a onClick={()=>{console.log(record)}}>Delete</a>
        </Space>
      ),
    },
  ];
  const [data,setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: 'zzz',
      age: 18,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      name: 'zzz',
      age: 18,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]);
  const [loading,setLoading] = useState(false);
  // const getData = async()=>{
  //     await getOrders().then(res=>{
  //     console.log(res);
  //     setData(res.products);
  //     setLoading(false);
  //   });
  // }
  // useEffect(async()=>{
  //   setLoading(true);
  //   await getData();
  // },[])
  return {
    columns,data,loading
  }
}



export  function useCircleChartData (){
  const config = {
    // description: {
    //   visible: true,
    //   text: '水波图 - 百分比显示',
    // },
    min: 0,
    max: 10000,
    value: 5639,
    statistic: { formatter: (value) => ((100 * value) / 10000).toFixed(1) + '%' },
  };
  return {config}
}

export function useChart(){
  const data = [
    {
      name: 'January',
      uv: 1300,
    },
    {
      name: 'February',
      uv: 4000,
      amt: 2400,
    },
    {
      name: 'March',
      uv: 3000,
      amt: 2210,
    },
    {
      name: 'April',
      uv: 2000,
    },
    {
      name: 'May',
      uv: 2780,
    },
    {
      name: 'June',
      uv: 1890,
      amt: 2181,
    },
  ];
  return {
    data
  }
}



export function useUserTable (){
  const navigate = useNavigate();
  const [columns,setColumns] = useState([
    {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,  //排序
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title:'Action',
    dataIndex: 'action',
    render: (_, record) => (
      <div>
        {/* <Link to={`${record.id}`}> */}
          <Button onClick = {()=>{navigate(`/user/${record.id}`)}}>detail</Button>
        {/* </Link> */}
      </div>
        
    ),
  }
  ])
  const [data,setData] = useState([
    {
    id: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    id: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    id: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    id: '4',
    name: 'ls',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    id: '5',
    name: 'op',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    id: '6',
    name: 'arb',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    id: '7',
    name: 'fat User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  ])
  const [pageSize,setPage] =useState(5);
  const [selectedRowKeys, setSelectedRowKeys] = useState([])  //选择行的key的数组
   const checkChange = (selectedRowKeys, selectedRows,record) => {
    console.log(selectedRowKeys,selectedRows,record);
    setSelectedRowKeys(selectedRowKeys); //选中的key
  }

  return {
    data,columns,pageSize,selectedRowKeys,checkChange
  }
}