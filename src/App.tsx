import React, { Suspense } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import routes from '@/router';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading......</div>}>
          <Routes>
            <Route path="/" element={ <Navigate to="/home/DIYKeyWord"/> }></Route>
            { routes.map(route => {
              return (<Route  key={ route.path } path={ route.path } element={  <route.element /> }>
                { route.children && route.children.length > 0
                  && 
                  route.children.map(routeChildren => (
                  <Route  key={ routeChildren.path } path={ routeChildren.path } element={ <routeChildren.element /> }/>
                ))}
              </Route>)
            }) }
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
