import React from 'react'
import './style.scss'
import { Outlet, useLocation } from 'react-router-dom'

function PageContent() {
  const location  = useLocation();
  console.log(location.pathname.split("/")[1]);
  return (
    <div className="pageContent">
      <Outlet ></Outlet>
    </div>
  )
}

export default PageContent