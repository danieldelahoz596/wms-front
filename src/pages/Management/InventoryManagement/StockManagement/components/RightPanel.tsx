import { useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { modalType } from '@/utils/helpers/types';
import { Button, Card, Row, Col, Descriptions, Dropdown, Collapse } from 'antd';
import { stock_data } from './structure';
import {
  DownOutlined,
  QuestionCircleTwoTone,
  SnippetsTwoTone,
  ToolTwoTone,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';

const StockDetails = () => {
  const [modal, setModal] = useState('');
  const [stockDataSource, setstockDataSource] = useState(stock_data);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const { initialState } = useModel('@@initialState');

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
      render: (text) => <a>{text}</a>,
    },
  ];

  return (
    <Row style={{ width: '100%' }}>
      <Col span={24}>
        <div style={{ fontSize: '20px', marginLeft: '10px' }}>Stock Details</div>
      </Col>
      <Col span={24}>
        <Collapse>
          {initialState?.initialData?.warehouses.map((_warehouse) => (
            <Collapse.Panel
              header={
                <span>
                  <h3>
                    {_warehouse.name}
                    <span style={{ color: _warehouse.id_color }}> (100)</span>
                  </h3>
                </span>
              }
              key={_warehouse.id}
            >
              <Card>
                <Row>
                  <Col span={12}>
                    <Card>
                      <div
                        style={{
                          position: 'absolute',
                          top: -14,
                          left: 3,
                          minHeight: 'auto',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 15,
                          backgroundColor: 'white',
                        }}
                      >
                        Warehouse Totals
                      </div>
                      <Row>
                        <Col span={18}>
                          <Row justify="end">On Hand:</Row>
                        </Col>
                        <Col span={6}>
                          <Row justify="end">600</Row>
                        </Col>
                        <Col span={18}>
                          <Row justify="space-between">
                            <Col span={2}>
                              <hr />
                            </Col>
                            <Col>Locked:</Col>
                          </Row>
                        </Col>
                        <Col span={6}>
                          <Row justify="end">100</Row>
                        </Col>
                        <Col span={18}>
                          <Row justify="space-between">
                            <Col span={2}>
                              <hr />
                            </Col>
                            <a>Allocated:</a>
                          </Row>
                        </Col>
                        <Col span={6}>
                          <Row justify="end">
                            <a>0</a>
                          </Row>
                        </Col>
                        <Col span={18}>
                          <Row justify="end" gutter={3}>
                            <Col>
                              <span
                                style={{
                                  borderColor: '#3FA3FF',
                                  borderStyle: 'solid',
                                  paddingLeft: 3,
                                  paddingRight: 3,
                                }}
                              >
                                <ToolTwoTone />
                              </span>{' '}
                              <span
                                style={{
                                  borderColor: '#3FA3FF',
                                  borderStyle: 'solid',
                                  paddingLeft: 3,
                                  paddingRight: 3,
                                }}
                              >
                                <SnippetsTwoTone />
                              </span>
                            </Col>
                            <Col>Min. Level:</Col>
                          </Row>
                        </Col>
                        <Col span={6}>
                          <Row justify="end">0</Row>
                        </Col>
                        <Col span={18}>
                          <Row justify="end">Differential:</Row>
                        </Col>
                        <Col span={6}>
                          <Row justify="end">0</Row>
                        </Col>
                      </Row>
                    </Card>
                    <h4>Warehouse Totals</h4>
                    <Descriptions>
                      <Descriptions.Item
                        label={
                          <span>
                            <QuestionCircleTwoTone /> Est. Reorder Date
                          </span>
                        }
                      >
                        06/11/2022
                      </Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                      <Descriptions.Item
                        label={
                          <span>
                            <QuestionCircleTwoTone /> Est. Runout Date
                          </span>
                        }
                      >
                        06/11/2022
                      </Descriptions.Item>
                    </Descriptions>
                    <Descriptions>
                      <Descriptions.Item
                        label={
                          <span>
                            <QuestionCircleTwoTone /> Incoming Units
                          </span>
                        }
                      >
                        <a>0</a>
                      </Descriptions.Item>
                    </Descriptions>
                  </Col>
                  <Col span={12}>
                    {/* <Column data={columnData} xField="type" yField="value" /> */}
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Card title="Stock Breakdown">
                      <a>SUNGLASSES-1234-FBA.error - Sterling silver Garnet Accent Heart Pendant</a>
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
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Adjust
                                  </span>
                                ),
                              },
                              {
                                key: '7',
                                label: (
                                  <span onClick={() => setModal(modalType.ManualOrder)}>
                                    Remove
                                  </span>
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
          ))}
        </Collapse>
      </Col>
    </Row>
  );
};

export default StockDetails;
