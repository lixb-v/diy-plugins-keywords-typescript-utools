import react, { lazy } from 'react'

const Home = lazy(() => import('@/pages/home'))
const Demo = lazy(() => import('@/pages/demo'))
const DIYKeyWord = lazy(() => import('@/pages/diyKeyWord'))
const openLocal = lazy(() => import('@/pages/openLocal'))

// import Home from '@/pages/Home'
// import Demo from '@/pages/Demo'
// 路由表接口
interface Route {
  path: string,
  element: react.FC,
  title: string,
  children?: Array<Route>
}

const routes : Array<Route> = [ {
  path: '/home',
  element: Home,
  title: '首页',
  children: [{
    path: '/home/DIYKeyWord',
    element: DIYKeyWord,
    title: 'DIY关键字'
  }, {
    path: '/home/openLocal',
    element: openLocal,
    title: '快捷资源'
  }]
}, {
  path: '/demo',
  element: Demo,
  title: '首页'
}]

export default routes