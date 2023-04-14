import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom';
const Home = lazy(
  async () => await import('../pages/Home')
);
const Login = lazy(
  async () => await import('../pages/Login')
);

const DashBoard = lazy(
  async () => await import('@/Component/PageContent/DashBoard')
)

const Orders = lazy(
  async () => await import('@/Component/PageContent/Orders')
)


const Inventory = lazy(
  async () => await import('@/Component/PageContent/Inventory')
)
const Customer = lazy(
  async () => await import('@/Component/PageContent/Customer')
)



function Index() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home></Home>,
      children:[
        {
          path:'/',
          element:<DashBoard></DashBoard>
        },
        {
          path:'orders',
          element:<Orders></Orders>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'customer',
          element:<Customer></Customer>
        },
        
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
  ])
  return (
    <div >
      <Suspense fallback={<p>loading</p>}>
          {element}
      </Suspense>

    </div>

  )
}

export default Index