import React from 'react'
import './style.scss'
import { Typography } from 'antd'
function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link >+86 19157681096</Typography.Link>
      <Typography.Link href='https://www.google.com' target = {'_blank'}>Privacy Policy</Typography.Link>
      <Typography.Link >Terms of Use</Typography.Link>
    </div>
  )
}

export default AppFooter