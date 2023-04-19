import { Divider, Radio, Table } from 'antd';
import { useState ,useEffect} from 'react';
import './style.scss'
const columns = [
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
];
const data = [
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
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    id: '5',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    id: '6',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    id: '7',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];



// rowSelection object indicates the need for row selection
const List = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])


  const checkChange = (selectedRowKeys, selectedRows,record) => {
    console.log(selectedRowKeys,selectedRows,record);
    setSelectedRowKeys(selectedRowKeys); //选中的key

  }

  return (
      <div className='userTable'>
        <div className='title'>title</div>
        <Table
            bordered
            style={{ width: '100%'}}
            columns={columns}
            dataSource={data}
            rowKey={(record)=>record.id}
            pagination={{
              pageSize:5
            }}
            rowSelection={{
                onChange: checkChange,
                type: 'checkbox',
                selectedRowKeys: selectedRowKeys
            }}
        />
      </div>
  )
}
export default List;