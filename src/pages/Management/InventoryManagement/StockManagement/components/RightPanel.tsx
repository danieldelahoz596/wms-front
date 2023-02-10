import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import StockHistoryModal from '@/components/Modals/Inventory/StockHistory';
import { modalType } from '@/utils/helpers/types';
import BarCodeIcon from '@/utils/icons/barcode';
import ClipboardIcon from '@/utils/icons/clipboard';
import StockIcon from '@/utils/icons/stock';
import TransferIcon from '@/utils/icons/transfer';
import UpDownArrowIcon from '@/utils/icons/upDownArrow';
import {
  CaretRightFilled,
  CheckCircleFilled,
  LinkOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
  QuestionCircleTwoTone,
  SnippetsTwoTone,
  StopOutlined,
  ToolTwoTone,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Card, Col, Collapse, Dropdown, Row, Space } from 'antd';
import { useState } from 'react';
import { location_history, stock_data } from './structure';
import WarehouseTotalGraph from './WarehouseTotalGraph';
interface IStockDetails {
  stockData: any;
}

const StockDetails: React.FC<IStockDetails> = ({ stockData }) => {
  const { initialState } = useModel('@@initialState');
  const [modal, setModal] = useState('');
  const [stockDataSource, setstockDataSource] = useState(stock_data);
  const [locationHistory, setLocationHistory] = useState(location_history);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const Scolumns = [
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (location) => (
        <>
          <BarCodeIcon style={{ fontSize: 15 }} />
          <StockIcon style={{ fontSize: 15 }} />
          {location}
        </>
      ),
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
    <div style={{ width: '100%' }}>
      <h2 style={{ marginLeft: '10px' }}>Stock Details</h2>
      <Collapse defaultActiveKey={initialState?.initialData?.warehouses[0].id}>
        {initialState?.initialData?.warehouses.map((_warehouse) => (
          <Collapse.Panel
            header={
              <h3>
                {_warehouse.name}
                <span style={{ color: _warehouse.id_color }}> (100)</span>
              </h3>
            }
            key={_warehouse.id}
          >
            <Row gutter={12}>
              <Col span={12}>
                <Card title="Warehouse Totals" style={{ textAlign: 'right' }}>
                  <Row>
                    <Col span={13} offset={1}>
                      <span>On Hand:</span>
                    </Col>
                    <Col span={10}>
                      <span>600</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}>
                      <hr />
                    </Col>
                    <Col span={13}>
                      <span>Locked:</span>
                    </Col>
                    <Col span={10}>
                      <span>600</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={1}>
                      <hr />
                    </Col>
                    <Col span={13}>
                      <a href="" style={{ textDecoration: 'underline' }}>
                        Allocated:
                      </a>
                    </Col>
                    <Col span={10}>
                      <a href="" style={{ textDecoration: 'underline' }}>
                        0
                      </a>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={13} offset={1}>
                      <span>Available:</span>
                    </Col>
                    <Col span={10}>
                      <span>600</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={13} offset={1}>
                      <Space size={3}>
                        <ToolTwoTone style={{ borderColor: '#3FA3FF' }} />
                        <SnippetsTwoTone style={{ borderColor: '#3FA3FF' }} />
                        <span>Min. Level:</span>
                      </Space>
                    </Col>
                    <Col span={10}>
                      <span>0</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={13} offset={1}>
                      <span>Differential:</span>
                    </Col>
                    <Col span={10}>
                      <span style={{ color: 'green' }}>+1,000,486</span>
                    </Col>
                  </Row>
                </Card>
                <Space direction="vertical" size={1} style={{ marginTop: 10, marginLeft: 5 }}>
                  <Row>
                    <Col span={20}>
                      <span>
                        <QuestionCircleTwoTone style={{ fontSize: 12 }} /> Est. Reorder Date:
                      </span>
                    </Col>
                    <Col span={4}>
                      <span>06/11/2022</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={20}>
                      <span>
                        <QuestionCircleTwoTone style={{ fontSize: 12 }} /> Est. Runout Date:
                      </span>
                    </Col>
                    <Col span={4}>
                      <span>06/11/2022</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={20}>
                      <span>
                        <QuestionCircleTwoTone style={{ fontSize: 12 }} /> Incoming Units:
                      </span>
                    </Col>
                    <Col span={4}>
                      <span>0</span>
                    </Col>
                  </Row>
                </Space>
              </Col>
              <Col span={12}>
                {/* <Column data={columnData} xField="type" yField="value" /> */}
                <WarehouseTotalGraph />
              </Col>
            </Row>
            <Card title="Stock Breakdown" style={{ marginTop: 20 }}>
              <a>{`${stockData?.name}-${stockData?.master_sku}-FBA.error - Sterling silver Garnet Accent Heart Pendant`}</a>
              <OTable
                type="radio"
                columns={Scolumns}
                rows={stockDataSource}
                selectedRows={selectedLocation}
                setSelectedRows={setSelectedLocation}
                pagination={false}
                style={{ marginTop: 5, marginBottom: 10 }}
              />
              <Row>
                <Col span={18}>
                  <Space size={4}>
                    <OButton btnText={'New Stock'} />
                    <Dropdown
                      disabled={selectedLocation.length === 0}
                      menu={{
                        items: [
                          {
                            key: '1',
                            label: (
                              <span onClick={() => setModal(modalType.StockHistory)}>
                                <ClipboardIcon style={{ fontSize: 15, marginRight: 10 }} /> History
                              </span>
                            ),
                          },
                          {
                            key: '2',
                            label: (
                              <span onClick={() => setModal(modalType.ManualOrder)}>
                                <StopOutlined
                                  rotate={90}
                                  style={{ fontSize: 15, marginRight: 10 }}
                                />
                                Deactivate
                              </span>
                            ),
                          },
                          {
                            key: '3',
                            label: (
                              <span onClick={() => setModal(modalType.ManualOrder)}>
                                <UpDownArrowIcon style={{ fontSize: 15, marginRight: 10 }} /> Draw
                                Rank
                              </span>
                            ),
                          },
                          {
                            key: '4',
                            label: (
                              <span onClick={() => setModal(modalType.ManualOrder)}>
                                <LinkOutlined style={{ fontSize: 15, marginRight: 10 }} /> Location
                              </span>
                            ),
                          },
                          {
                            key: '5',
                            label: (
                              <span onClick={() => setModal(modalType.ManualOrder)}>
                                <TransferIcon style={{ fontSize: 15, marginRight: 10 }} /> Transfer
                              </span>
                            ),
                          },
                          {
                            key: '6',
                            label: (
                              <span onClick={() => setModal(modalType.ManualOrder)}>
                                <CheckCircleFilled style={{ fontSize: 15, marginRight: 10 }} />{' '}
                                Adjust
                              </span>
                            ),
                          },
                          {
                            key: '7',
                            label: (
                              <span onClick={() => setModal(modalType.ManualOrder)}>
                                <MinusCircleFilled style={{ fontSize: 15, marginRight: 10 }} />{' '}
                                Remove
                              </span>
                            ),
                          },
                          {
                            key: '8',
                            label: (
                              <span onClick={() => setModal(modalType.ManualOrder)}>
                                <PlusCircleFilled style={{ fontSize: 15, marginRight: 10 }} /> Add
                              </span>
                            ),
                          },
                        ],
                      }}
                    >
                      <Button size="small">
                        <Space>
                          Edit <CaretRightFilled />
                        </Space>
                      </Button>
                    </Dropdown>
                    <OButton btnText={'Inv. Val. Hist.'} />
                  </Space>
                </Col>
                <Col span={6}>
                  <OButton btnText={'Show Inactive'} />
                </Col>
              </Row>
            </Card>
          </Collapse.Panel>
        ))}
      </Collapse>

      <StockHistoryModal
        isOpen={modal === modalType.StockHistory}
        title={
          <>
            {"In-House Warehouse Stock Edit History For 1234 At '"}{' '}
            <BarCodeIcon style={{ fontSize: 15 }} />
            <StockIcon style={{ fontSize: 15 }} />
            {"Location1234234234'"}
          </>
        }
        dataSource={locationHistory}
        onClose={() => setModal(modalType.Close)}
      />
    </div>
  );
};

export default StockDetails;
