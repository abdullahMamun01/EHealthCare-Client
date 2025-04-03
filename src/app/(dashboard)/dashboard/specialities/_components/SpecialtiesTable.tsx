'use client';

import { Layout, Button, Space, Typography, Table, Breadcrumb } from 'antd';

import { Heart, Brain, Bone, Activity, Bluetooth as Tooth } from 'lucide-react';

const {  Content } = Layout;

const { Title } = Typography;
const specialtiesData = [
    { key: 'SP001', specialty: 'Urology', icon: <Heart size={24} /> },
    { key: 'SP002', specialty: 'Neurology', icon: <Brain size={24} /> },
    { key: 'SP003', specialty: 'Orthopedic', icon: <Bone size={24} /> },
    { key: 'SP004', specialty: 'Cardiologist', icon: <Activity size={24} /> },
    { key: 'SP005', specialty: 'Dentist', icon: <Tooth size={24} /> },
  ];

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Specialities',
      dataIndex: 'specialty',
      key: 'specialty',
      render: (text: string, record: any) => (
        <Space>
          {record.icon}
          {text}
        </Space>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space size="middle">
          <Button type="primary" ghost size="small">Edit</Button>
          <Button danger size="small">Delete</Button>
        </Space>
      ),
    },
  ];
export default function SpecialtiesTable() {
  return (

    <Table 
      columns={columns} 
      dataSource={specialtiesData}
      pagination={{
        total: 5,
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total) => `Showing 1 to ${total} of ${total} entries`
      }}
    />
  
  )
}
