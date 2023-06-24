import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarLayout from './SidebarLayout';

const MainLayout = () => {
  return (
    <div>
      <SidebarLayout></SidebarLayout>
      <div className='myMainLayoutMargin' style={{ marginLeft:'280px',marginRight:'10px'}}>
        <Outlet>
        </Outlet>
      </div>

    </div>
  );
};

export default MainLayout;