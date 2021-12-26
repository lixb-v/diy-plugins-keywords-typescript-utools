import React from 'react';
import { Outlet } from 'react-router-dom';
import {  useDispatch, useSelector} from 'react-redux';
import { CombinedState } from '@/store/reducers';
import { AddState } from '@/store/reducers/addReducer';
function Home() {
  // Dispath函数
  console.log(useDispatch());
  
  // 获取state
  const number = useSelector<CombinedState, AddState['number']>((state) => {
    return state.addReducer.number
  })
  console.log(number);
  
  return (
    <div>
      Home
      <Outlet />
    </div>
  );
}

export default Home;
