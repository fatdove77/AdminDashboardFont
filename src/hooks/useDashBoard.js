import React, { useEffect, useState ,useMemo} from 'react'
import { getOrders } from '../request/api';
function useDashBoard() {
  const columns = [
    {
      title:'title',
      dataIndex:'title',
    },
    {
      title:'price',
      dataIndex:'price',
    },
    {
      title:'quantity',
      dataIndex:'quantity',
    }
  ];
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const getData = async()=>{
      await getOrders().then(res=>{
      console.log(res);
      setData(res.products);
      setLoading(false);
    });
  }
  useEffect(async()=>{
    setLoading(true);
    await getData();
  },[])
  return {
    columns,data,loading
  }
}

export default useDashBoard