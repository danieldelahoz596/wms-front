import { Button, Input, message, Card, Row, Col, SelectProps,  Modal, Select, Popconfirm, Checkbox, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import { data } from './data';
import { modalType } from '../../../../../utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';

const { Option } = Select;
const { TabPane } = Tabs;
const { Search } = Input;

const HistoricalExports: React.FC = () => {

  const options: SelectProps['options'] = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const [dataSource, setDataSource] = useState(data);
  const Tcolumns = [
    {
      title: 'Export Request Date',
      dataIndex: 'export_request_date',
      key: 'export_request_date',
    },
    {
      title: 'Export Completion Date',
      dataIndex: 'export_completion_date',
      key: 'export_completion_date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: '',
      render: (record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <>
              <Button type="primary">Download</Button>
          </>
        ) : null,
    }
  ];

  return (
    <>
      <div style={{marginTop: '10px'}}>
        <h2>ORDERS {'>'} HISTORICAL EXPORTS</h2>
        <Row>
          <Col span={23}>
            <Card>
              <div style={{marginBottom: '20px'}}>
                <p style={{fontSize: '14px', display: 'inline-block', marginRight: '10px'}}>Sales Channels : </p>
                <div style={{ width: 240, display: 'inline-block', marginRight: '10px' }}>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    options={options}
                  />
                </div>
                <p style={{fontSize: '14px', display: 'inline-block', marginRight: '10px'}}>Warehouses : </p>
                <div style={{ width: 240, display: 'inline-block', marginRight: '10px' }}>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    options={options}
                  />
                </div>
                <p style={{fontSize: '14px', display: 'inline-block', marginRight: '10px'}}>Status : </p>
                <div style={{ width: 240, display: 'inline-block', marginRight: '10px' }}>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    options={options}
                  />
                </div>
              </div>

              <div>
                <p style={{fontSize: '14px', display: 'inline-block', marginRight: '10px'}}>Shipped Date From : </p>
                <div style={{ width: 80, display: 'inline-block', marginRight: '10px' }}>
                    <Input placeholder="" />
                </div>
                <p style={{fontSize: '14px', display: 'inline-block', marginRight: '10px'}}>To : </p>
                <div style={{ width: 80, display: 'inline-block', marginRight: '20px' }}>
                    <Input placeholder="" />
                </div>

                <p style={{fontSize: '14px', display: 'inline-block', marginRight: '10px'}}>Order Date From : </p>
                <div style={{ width: 80, display: 'inline-block', marginRight: '10px' }}>
                    <Input placeholder="" />
                </div>
                <p style={{fontSize: '14px', display: 'inline-block', marginRight: '10px'}}>To : </p>
                <div style={{ width: 80, display: 'inline-block', marginRight: '30px' }}>
                    <Input placeholder="" />
                </div>

                <Button type='primary'>Generate Export</Button>
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={23}>
            <Card>
              <h3>Note: This data from Historical Exports might be delayed for up to 24 hours, the exports do not reflect the most up-to-date state of the orders.</h3>
              <Card>
                <OTable
                  columns={Tcolumns}
                  rows={dataSource}
                />
              </Card>
            </Card>  
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HistoricalExports;
