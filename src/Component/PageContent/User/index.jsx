import { Button, Divider, Radio, Table } from 'antd';
import { useState ,useEffect} from 'react';
import './style.scss'
import { useUserTable } from '../../../hooks/useDashBoard';



// rowSelection object indicates the need for row selection
const List = () => {
  const {data,columns,pageSize,selectedRowKeys,checkChange} = useUserTable();
  console.log(data);
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
              pageSize:pageSize
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