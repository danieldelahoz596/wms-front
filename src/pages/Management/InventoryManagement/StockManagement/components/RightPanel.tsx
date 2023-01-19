import { useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { modalType } from '@/utils/helpers/types';
import { Button, Card, Row, Col, Descriptions, Dropdown, Collapse } from 'antd';
import { stock_data } from './structure';
import { DownOutlined } from '@ant-design/icons';

const StockDetails = () => {
  const [modal, setModal] = useState('');
  const [stockDataSource, setstockDataSource] = useState(stock_data);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const Scolumns = [
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Min. Level',
      dataIndex: 'min_level',
      key: 'min_level',
    },
    {
      title: 'Available',
      dataIndex: 'available',
      key: 'available',
    },
  ];

  return (
    <Row style={{ width: '100%' }}>
      <Col span={24}>
        <div style={{ fontSize: '20px', marginLeft: '10px' }}>Stock Details</div>
      </Col>
      <Col span={24}>
        <Collapse defaultActiveKey="1">
          <Collapse.Panel header="In-House Warehouse (1000)" key="1">
            <Card>
              <Row>
                <Col span={12}>
                  <h4>Warehouse Totals</h4>
                  <ul>
                    <li>On Hand: 600</li>
                    <li>Locked: 100</li>
                    <li>Allocated: 0</li>
                    <li>Min. Level: 0</li>
                    <li>Differential: 1000</li>
                  </ul>
                  <Descriptions>
                    <Descriptions.Item label="Est. Reorder Date">06/11/2022</Descriptions.Item>
                  </Descriptions>
                  <Descriptions>
                    <Descriptions.Item label="Est. Runout Date">06/11/2022</Descriptions.Item>
                  </Descriptions>
                  <Descriptions>
                    <Descriptions.Item label="Incoming Units">0</Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col span={12}>
                  {/* <Column data={columnData} xField="type" yField="value" /> */}
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card title="Stock Breakdown">
                    <OTable
                      type="radio"
                      columns={Scolumns}
                      rows={stockDataSource}
                      selectedRows={selectedLocation}
                      setSelectedRows={setSelectedLocation}
                    />
                    <Row gutter={[20, 10]} justify="space-between">
                      <Button type="dashed" style={{ marginRight: '4px' }}>
                        New Stock
                      </Button>
                      <Dropdown
                        disabled={selectedLocation.length === 0}
                        menu={{
                          items: [
                            {
                              key: '1',
                              label: (
                                <span onClick={() => setModal(modalType.StockHistory)}>
                                  History
                                </span>
                              ),
                            },
                            {
                              key: '2',
                              label: (
                                <span onClick={() => setModal(modalType.ManualOrder)}>
                                  Deactivate
                                </span>
                              ),
                            },
                            {
                              key: '3',
                              label: (
                                <span onClick={() => setModal(modalType.ManualOrder)}>
                                  Draw Rank
                                </span>
                              ),
                            },
                            {
                              key: '4',
                              label: (
                                <span onClick={() => setModal(modalType.ManualOrder)}>
                                  Location
                                </span>
                              ),
                            },
                            {
                              key: '5',
                              label: (
                                <span onClick={() => setModal(modalType.ManualOrder)}>
                                  Transfer
                                </span>
                              ),
                            },
                            {
                              key: '6',
                              label: (
                                <span onClick={() => setModal(modalType.ManualOrder)}>Adjust</span>
                              ),
                            },
                            {
                              key: '7',
                              label: (
                                <span onClick={() => setModal(modalType.ManualOrder)}>Remove</span>
                              ),
                            },
                            {
                              key: '8',
                              label: (
                                <span onClick={() => setModal(modalType.ManualOrder)}>Add</span>
                              ),
                            },
                          ],
                        }}
                      >
                        <Button type="dashed" style={{ marginRight: '4px' }}>
                          Edit <DownOutlined />
                        </Button>
                      </Dropdown>
                      <Button type="dashed" style={{ marginRight: '4px' }}>
                        Inv. Val. Hist.
                      </Button>
                      <Button type="dashed">Show Inactive</Button>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Collapse.Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default StockDetails;
