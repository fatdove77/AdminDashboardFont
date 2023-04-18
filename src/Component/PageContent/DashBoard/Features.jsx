import { Typography } from 'antd'
import React from 'react'
import {MoreOutlined,DownOutlined,UpOutlined} from '@ant-design/icons'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Features() {
  return (
    <div className="features">
      <div className="top">
        <div className="title">Total revenue</div>
        <MoreOutlined />
       </div>
       <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar 
            value = {70} 
            text = {"70"}
            strokeWidth={5}
            />
        </div>
        <div className="title">total sales made today</div>
        <div className="amount">$420</div>
        <div className="desc">Previous transactions processing,Last payments may not be included</div>
        <div className="summary">
          <div className="item">
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
              <DownOutlined />
             <div className='itemAmount'>$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className='itemTitle '>Last Week</div>
            <div className='itemResult negative'>
              <UpOutlined />
             <div className='itemAmount'>$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult negative'>
              <UpOutlined />
             <div className='itemAmount'>$12.4k</div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Features