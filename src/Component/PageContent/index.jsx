import React from 'react'
import './style.scss'
import { Outlet } from 'react-router-dom'

function PageContent() {
  return (
    <div className="pageContent">
      <Outlet ></Outlet>
    </div>
  )
}

export default PageContent