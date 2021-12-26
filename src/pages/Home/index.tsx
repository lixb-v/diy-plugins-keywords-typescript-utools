import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Card } from 'antd';
interface TabItem {
  tab: string,
  key: string
}
function Home() {
  const navigate = useNavigate()
  // Dispath函数
  const [ tabList ] = useState<TabItem[]>([{
    tab: 'DIY关键字',
    key: '/home/DIYKeyWord'
  }, {
    tab: '快捷资源',
    key: '/home/openLocal'
  }])
  const [ activeTabKey, setActiveTabKey ] = useState<string>(tabList[0].key)
  
  const tabChange = (key: string):void => {
    navigate(key)
    setActiveTabKey(key)
  }
  return (
    <Card
      style={{ width: '100%' }}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={tabChange}
     >
       <Outlet />
     </Card>
  );
}

export default Home;
