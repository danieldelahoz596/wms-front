import { OButton } from '@/components/Globals/OButton';
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
import { FormattedMessage, useModel } from '@umijs/max';
import { Button, Card, Col, Collapse, Dropdown, Row, Space, Table } from 'antd';
import { useState, useMemo } from 'react';
import WarehouseTotalGraph from './WarehouseTotalGraph';

// Modals
import NewStockModal from './Modals/NewStock';
import StockAdjustModal from './Modals/StockAdjust';
import StockDeactiveModal from './Modals/StockDeactive';
import StockDrawRankModal from './Modals/StockDrawLRank';
import StockEditModal from './Modals/StockEdit';
import StockHistoryModal from './Modals/StockHistory';
import StockLocationChangeModal from './Modals/StockLocationChange';
import StockLocationTransferModal from './Modals/StockLocationTransfer';

interface IStockDetails {
  vendorData: any;
}

export const location_history = [
  {
    key: 1,
    edit_time: '04/01/2021 10:49 AM',
    user: 'support@skubana.com',
    edit_type: 'Adjust',
    description:
      'Initial On Hand: 1000011 \nNew on Hand: 1000011 \n Initial Locked: 180 \nNew Locked: 0\nInitial Min. Stock:2\nNew Min.Stock:2',
    notes: '',
  },
  {
    key: 2,
    edit_time: '04/01/2021 10:49 AM',
    user: 'support@test.com',
    edit_type: 'Adjust',
    description:
      'Initial On Hand: 1000011 \nNew on Hand: 1000011 \n New Locked: 0\nInitial Locked: 180 \nInitial Min. Stock:2\nNew Min.Stock:2',
    notes: '',
  },
  {
    key: 3,
    edit_time: '04/01/2021 10:50 AM',
    user: 'Skubana',
    edit_type: 'Remove',
    description: 'Initial On Hand: 1000012 \nQuantity Duducted: 1\n New On Hand: 1000011',
    notes: '',
  },
  {
    key: 4,
    edit_time: '04/01/2021 10:50 AM',
    user: 'Skubana',
    edit_type: 'Remove',
    description: 'Quantity Duducted: 1\n New On Hand: 1000012\n Initial On Hand: 1000013\n New On Hand: 1000013\n ',
    notes: '',
  },
  {
    key: 5,
    edit_time: '04/01/2021 10:50 AM',
    user: '',
    edit_type: 'Adjust',
    description: 'Initial On Hand: 1000013\n New On Hand: 1000013\n Initial Locked: 0',
    notes: 'Order IP25chardot Shipped',
  },
];

export const stock_data = [
  {
    key: 1,
    location: 'Location 1',
    status: true,
    rank: 1,
    min_level: '2',
    available: 100,
    on_hand: 25,
    locked: 3,
    min: 0,
  },
  {
    key: 2,
    location: 'Location 2',
    status: true,
    rank: 2,
    min_level: '3',
    available: 200,
    on_hand: 0,
    locked: 0,
    min: 0,
  },
  {
    key: 3,
    location: 'Location 3',
    status: true,
    rank: 3,
    min_level: '2',
    available: 200,
    on_hand: 0,
    locked: 0,
    min: 0,
  },
];

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

const StockDetails: React.FC<IStockDetails> = ({ vendorData }) => {
  const { initialState } = useModel('@@initialState');
  const { warehouseList } = useModel('warehouse');
  const [modal, setModal] = useState('');
  const [locationHistory] = useState(location_history);
  const [locationList, setLocationList] = useState(stock_data);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showActive, setShowActive] = useState(true);
  const [actionType, setActionType] = useState('Add');

  const stockTableRows = useMemo(() => locationList.filter((item) => item.status === showActive), [locationList, showActive]);

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ marginLeft: '10px' }}>
        <FormattedMessage id="pages.inventory.stock.rightpanel.title" />
      </h2>
      <Collapse defaultActiveKey={initialState?.initialData?.warehouses[0].id}>
        {warehouseList.map((_warehouse) => (
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
              <a>{`${vendorData?.name}-${vendorData?.master_sku}`}</a>

              <Table
                columns={Scolumns}
                dataSource={stockTableRows}
                onRow={(record) => {
                  return {
                    onClick() {
                      if (record.key === selectedLocation?.key) setSelectedLocation(null);
                      else setSelectedLocation(record);
                    },
                  };
                }}
                rowClassName={(record) => (record.key === selectedLocation?.key ? `ant-table-row-selected` : '')}
                style={{ marginTop: 5, marginBottom: 10 }}
                pagination={{ hideOnSinglePage: true }}
              />

              <Row>
                <Col span={17}>
                  <Space size={HORIZONTAL_SPACE_SIZE}>
                    <OButton btnText={'New Stock'} onClick={() => setModal(modalType.NewStock)} />
                    <Dropdown
                      disabled={!selectedLocation}
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
                              <span onClick={() => setModal(modalType.StockDeactive)}>
                                <StopOutlined rotate={90} style={{ fontSize: 15, marginRight: 10 }} />
                                {showActive ? 'Deactivate' : 'Activate'}
                              </span>
                            ),
                          },
                          {
                            key: '3',
                            label: (
                              <span onClick={() => setModal(modalType.StockDrawRank)}>
                                <UpDownArrowIcon style={{ fontSize: 15, marginRight: 10 }} /> Draw Rank
                              </span>
                            ),
                          },
                          {
                            key: '4',
                            label: (
                              <span onClick={() => setModal(modalType.StockLocationChange)}>
                                <LinkOutlined style={{ fontSize: 15, marginRight: 10 }} /> Location
                              </span>
                            ),
                          },
                          {
                            key: '5',
                            label: (
                              <span onClick={() => setModal(modalType.StockLocationTransfer)}>
                                <TransferIcon style={{ fontSize: 15, marginRight: 10 }} /> Transfer
                              </span>
                            ),
                          },
                          {
                            key: '6',
                            label: (
                              <span onClick={() => setModal(modalType.StockAdjust)}>
                                <CheckCircleFilled style={{ fontSize: 15, marginRight: 10 }} /> Adjust
                              </span>
                            ),
                          },
                          {
                            key: '7',
                            label: (
                              <span
                                onClick={() => {
                                  setModal(modalType.StockEdit);
                                  setActionType('Remove');
                                }}
                              >
                                <MinusCircleFilled style={{ fontSize: 15, marginRight: 10 }} /> Remove
                              </span>
                            ),
                          },
                          {
                            key: '8',
                            label: (
                              <span
                                onClick={() => {
                                  setModal(modalType.StockEdit);
                                  setActionType('Add');
                                }}
                              >
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
                <Col span={7} style={{ textAlign: 'right' }}>
                  <OButton
                    btnText={`Show ${showActive ? 'Inactive' : 'Active'}`}
                    onClick={() => {
                      setShowActive((prev) => !prev);
                      setSelectedLocation(null);
                    }}
                  />
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
            {"In-House Warehouse Stock Edit History For 1234 At '"} <BarCodeIcon style={{ fontSize: 15 }} />
            <StockIcon style={{ fontSize: 15 }} />
            {"Location1234234234'"}
          </>
        }
        dataSource={locationHistory}
        onClose={() => setModal(modalType.Close)}
      />

      <StockDeactiveModal
        isOpen={modal === modalType.StockDeactive}
        subTitle={`${vendorData.name} @ ${selectedLocation?.location}`}
        active={showActive}
        onSave={() => {
          setLocationList(
            locationList.map((item) => (item.key === selectedLocation?.key ? { ...item, status: !item.status } : item)),
          );
          setModal(modalType.Close);
          setSelectedLocation(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockDrawRankModal
        isOpen={modal === modalType.StockDrawRank}
        vendorName={vendorData.name}
        locations={locationList.filter((item) => item.status)}
        onSave={(items) => {
          setLocationList(items.map((item, index) => ({ ...item, rank: index + 1 })));
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockLocationChangeModal
        isOpen={modal === modalType.StockLocationChange}
        vendorName={vendorData.name}
        locationName={selectedLocation?.location}
        onSave={(name) => {
          setLocationList(
            locationList.map((location) =>
              location.key === selectedLocation.key ? { ...selectedLocation, location: name } : location,
            ),
          );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockLocationTransferModal
        isOpen={modal === modalType.StockLocationTransfer}
        vendorName={vendorData.name}
        selectedLocation={selectedLocation}
        locations={locationList}
        onSave={(values) => {
          setLocationList(
            locationList.map((location) =>
              location.key === selectedLocation.key
                ? { ...location, available: location.available - values.available }
                : location.key === values.destination
                ? { ...location, available: location.available + values.available }
                : location,
            ),
          );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockAdjustModal
        isOpen={modal === modalType.StockAdjust}
        vendorName={vendorData.name}
        initialData={selectedLocation}
        onSave={(values) => {
          setLocationList(
            locationList.map((location) => (location.key === selectedLocation.key ? { ...location, ...values } : location)),
          );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockEditModal
        isOpen={modal === modalType.StockEdit}
        vendorName={vendorData.name}
        locationInfo={selectedLocation}
        actionType={actionType}
        onSave={(count) => {
          setLocationList(
            locationList.map((location) => {
              if (location.key === selectedLocation.key) {
                if (actionType === 'Add') return { ...location, available: location.available + count };
                else return { ...location, available: location.available - count };
              }
              return location;
            }),
          );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <NewStockModal
        isOpen={modal === modalType.NewStock}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
        stockData={vendorData}
      />
    </div>
  );
};

export default StockDetails;
