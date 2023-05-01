import { useState, useMemo } from 'react';
import { Dropdown, Row, Col, Collapse, Card, Space, Table, Button } from 'antd';
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
import type { IStockDetails } from '@/models/stockLocation';
import WarehouseTotalGraph from './WarehouseTotalGraph';
import { useModel } from '@umijs/max';
import BarCodeIcon from '@/utils/icons/barcode';
import StockIcon from '@/utils/icons/stock';
import { OButton } from '@/components/Globals/OButton';
import { modalType } from '@/utils/helpers/types';
import ClipboardIcon from '@/utils/icons/clipboard';
import UpDownArrowIcon from '@/utils/icons/upDownArrow';
import TransferIcon from '@/utils/icons/transfer';

// Modals
import NewStockModal from './Modals/NewStock';
import StockHistoryModal from './Modals/StockHistory';
import StockDeactiveModal from './Modals/StockDeactive';
import StockDrawRankModal from './Modals/StockDrawLRank';
import StockLocationChangeModal from './Modals/StockLocationChange';
import StockLocationTransferModal from './Modals/StockLocationTransfer';
import StockAdjustModal from './Modals/StockAdjust';
import StockEditModal from './Modals/StockEdit';

interface IStockCollapse {
  data: IStockDetails;
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

const StockCollapse: React.FC<IStockCollapse> = ({ data, ...rest }) => {
  const { selectedStockItem, setStockDetails, createStock } = useModel('stockLocation');
  const { updateLocationStatus } = useModel('warehouseLocation');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modal, setModal] = useState<modalType>(modalType.Close);
  const [showActive, setShowActive] = useState(true);
  const [actionType, setActionType] = useState('Add');
  const [locationHistory] = useState(location_history);

  const TColumns = [
    {
      title: 'Location',
      dataIndex: 'name',
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
      render: (status) => (status ? 'Active' : 'Deactive'),
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

  const TRows = useMemo(
    () =>
      data.locations
        .filter((item) => item.status == showActive)
        .map((item) => ({ key: item.id, rank: 0, min_level: 0, ...item })),
    [data.locations, showActive],
  );

  return (
    <Collapse.Panel
      header={
        <h3>
          {data.warehouse.name}
          <span style={{ color: data.warehouse.id_color }}> ({data.on_hand})</span>
        </h3>
      }
      key={data.warehouse_id}
      {...rest}
    >
      <Row gutter={12}>
        <Col span={12}>
          <Card title="Warehouse Totals" style={{ textAlign: 'right' }}>
            <Row>
              <Col span={13} offset={1}>
                <span>On Hand:</span>
              </Col>
              <Col span={10}>
                <span>{data.on_hand}</span>
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
                <span>{data.locked}</span>
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
                  {data.allocated}
                </a>
              </Col>
            </Row>
            <Row>
              <Col span={13} offset={1}>
                <span>Available:</span>
              </Col>
              <Col span={10}>
                <span>{data.available}</span>
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
                <span style={{ color: 'green' }}>+{data.discrepation}</span>
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
          <WarehouseTotalGraph minLevel={0} stockValue={data.on_hand} />
        </Col>
      </Row>
      <Card title="Stock Breakdown" style={{ marginTop: 20 }}>
        <a>{`${selectedStockItem?.product.name}-${selectedStockItem?.product.sku}`}</a>

        <Table
          columns={TColumns}
          dataSource={TRows}
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

        <div className="space-between">
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
            <OButton btnText={'Inv. Value. Hist.'} />
          </Space>
          <OButton
            btnText={`Show ${showActive ? 'Inactive' : 'Active'}`}
            onClick={() => {
              setShowActive((prev) => !prev);
              setSelectedLocation(null);
            }}
          />
        </div>
      </Card>

      <NewStockModal
        isOpen={modal === modalType.NewStock}
        onSave={(values) => {
          createStock({ ...values, warehouse_id: data.warehouse_id, product_id: selectedStockItem.product_id }).then(
            ({ location }) => {
              setStockDetails((prev) =>
                prev.map((item) =>
                  item.warehouse_id === data.warehouse_id
                    ? { ...item, locations: [...item.locations, { ...location, available: values.on_hand }] }
                    : item,
                ),
              );
              // setModal(modalType.Close);
            },
          );
        }}
        onClose={() => setModal(modalType.Close)}
        stockData={selectedStockItem}
      />

      <StockDeactiveModal
        isOpen={modal === modalType.StockDeactive}
        subTitle={selectedLocation?.name}
        active={showActive}
        onSave={() => {
          updateLocationStatus(data.warehouse_id, selectedLocation.id, !selectedLocation.status).then(() => {
            setStockDetails((prev) =>
              prev.map((item) =>
                item.warehouse_id === data.warehouse_id
                  ? {
                      ...item,
                      locations: item.locations.map((location) =>
                        location.id === selectedLocation.id ? { ...location, status: !location.status } : location,
                      ),
                    }
                  : item,
              ),
            );
            setModal(modalType.Close);
            setSelectedLocation(null);
          });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockDrawRankModal
        isOpen={modal === modalType.StockDrawRank}
        vendorName={'vendorData.name'}
        locations={[]}
        onSave={(items) => {
          // setLocationList(items.map((item, index) => ({ ...item, rank: index + 1 })));
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockLocationChangeModal
        isOpen={modal === modalType.StockLocationChange}
        vendorName={'vendorData.name'}
        locationName={selectedLocation?.location}
        onSave={(name) => {
          // setLocationList(
          //   locationList.map((location) =>
          //     location.key === selectedLocation.key ? { ...selectedLocation, location: name } : location,
          //   ),
          // );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockLocationTransferModal
        isOpen={modal === modalType.StockLocationTransfer}
        vendorName={'vendorData.name'}
        selectedLocation={selectedLocation}
        locations={[]}
        onSave={(values) => {
          // setLocationList(
          //   locationList.map((location) =>
          //     location.key === selectedLocation.key
          //       ? { ...location, available: location.available - values.available }
          //       : location.key === values.destination
          //       ? { ...location, available: location.available + values.available }
          //       : location,
          //   ),
          // );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockAdjustModal
        isOpen={modal === modalType.StockAdjust}
        vendorName={'vendorData.name'}
        initialData={selectedLocation}
        onSave={(values) => {
          // setLocationList(
          //   locationList.map((location) => (location.key === selectedLocation.key ? { ...location, ...values } : location)),
          // );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <StockEditModal
        isOpen={modal === modalType.StockEdit}
        vendorName={'vendorData.name'}
        locationInfo={selectedLocation}
        actionType={actionType}
        onSave={(count) => {
          // setLocationList(
          //   locationList.map((location) => {
          //     if (location.key === selectedLocation.key) {
          //       if (actionType === 'Add') return { ...location, available: location.available + count };
          //       else return { ...location, available: location.available - count };
          //     }
          //     return location;
          //   }),
          // );
          setSelectedLocation(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

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
    </Collapse.Panel>
  );
};

export default StockCollapse;
