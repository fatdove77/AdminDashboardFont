import React from 'react'
import { Button, Space } from 'antd';
import { motion } from "framer-motion"
//组件
import SideMenu from '@/Component/SideMenu'
import AppHeader from '@/Component/AppHeader';
import PageContent from '@/Component/PageContent'
import AppFooter from '@/Component/AppFooter'
function Home() {
  return (
    <div className="home">
      <AppHeader></AppHeader>
      <Space className="flex flex-1 items-start justify-start" >
        <SideMenu ></SideMenu>
        <PageContent/>
      </Space>
      <AppFooter></AppFooter>
    </div>
  )
}

export default Home