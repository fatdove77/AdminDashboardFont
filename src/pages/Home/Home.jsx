import React from 'react'
import { Button, Space } from 'antd';
import { motion } from "framer-motion"
//scss
import './style.scss'
//组件
import SideMenu from '@/Component/SideMenu'
import Navbar from '@/Component/Navbar';
import PageContent from '@/Component/PageContent'
import AppFooter from '@/Component/AppFooter'
function Home() {
  return (
    <div className="home">
        <SideMenu ></SideMenu>
        <div className = "content">
          <Navbar></Navbar>
          <PageContent />
        </div>
       
      {/* <AppFooter></AppFooter> */}
    </div>
  )
}

export default Home