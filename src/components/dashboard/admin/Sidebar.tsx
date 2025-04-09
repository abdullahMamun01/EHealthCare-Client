'use client';
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  UserOutlined,
  StarOutlined,
  DollarOutlined,
  SettingOutlined,
  FileTextOutlined,
  UserSwitchOutlined,
  LockOutlined,
  WarningOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import Logo from '@/components/logo/Logo';
import { useRouter } from 'next/navigation';


const { Sider } = Layout;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);


  const mainMenuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'appointments',
      icon: <CalendarOutlined />,
      label: 'Appointments',
    },
    {
      key: 'specialities',
      icon: <MedicineBoxOutlined />,
      label: 'Specialities',
    },
    {
      key: 'doctors',
      icon: <TeamOutlined />,
      label: 'Doctors',
    },
    {
      key: 'patients',
      icon: <UserOutlined />,
      label: 'Patients',
    },
    {
      key: 'reviews',
      icon: <StarOutlined />,
      label: 'Reviews',
    },
    {
      key: 'transactions',
      icon: <DollarOutlined />,
      label: 'Transactions',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'reports',
      icon: <FileTextOutlined />,
      label: 'Reports',
      children: [
        {
          key: 'report1',
          label: 'Income Report',
        },
        {
          key: 'report2',
          label: 'Invoice Report',
        },
      ],
    },
  ];

  const pageMenuItems = [
    {
      key: 'profile',
      icon: <UserSwitchOutlined />,
      label: 'Profile',
    },
    {
      key: 'authentication',
      icon: <LockOutlined />,
      label: 'Authentication',
      children: [
        {
          key: 'login',
          label: 'Login',
        },
        {
          key: 'register',
          label: 'Register',
        },
      ],
    },
    {
      key: 'error-pages',
      icon: <WarningOutlined />,
      label: 'Error Pages',
      children: [
        {
          key: '404',
          label: '404 Error',
        },
        {
          key: '500',
          label: '500 Error',
        },
      ],
    },
    {
      key: 'blank-page',
      icon: <FileOutlined />,
      label: 'Blank Page',
    },
  ];
  const router = useRouter()
  return (
   
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        style={{
          background: '#1B5A90',
          position: 'sticky',
          top: 0
        }}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#3A5795]">
          {!collapsed && (
            <span className="text-2xl font-bold text-white">
              <Logo className='w-[150px] h-20 object-contain'/>
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:text-gray-300"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>
        <div className="py-4">
          <div className="px-4 mb-2">
            {!collapsed && (
              <span className="text-[#8699BD] text-xs font-medium uppercase">
                Main
              </span>
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['dashboard']}
            style={{
              background: 'transparent',
            }}
            items={mainMenuItems}
            onClick={({ key }) => router.push(`/dashboard/${key}`)}
          />
        </div>
        <div className="py-4">
          <div className="px-4 mb-2">
            {!collapsed && (
              <span className="text-[#8699BD] text-xs font-medium uppercase">
                Pages
              </span>
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            style={{
              background: 'transparent',
            }}
            items={pageMenuItems}
          />
        </div>
      </Sider>


  );
}

export default Sidebar;