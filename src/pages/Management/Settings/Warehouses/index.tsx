import { OButton } from '@/components/Globals/OButton';
import AddShippingZonesModal from '@/components/Modals/Settings/Warehouse/AddShippingZones';
import BasicInfoModal from '@/components/Modals/Settings/Warehouse/BasicInfo';
import DocumentPrintSettingsModal from '@/components/Modals/Settings/Warehouse/DocumentPrintSettings';
import NewWarehouseModal from '@/components/Modals/Settings/Warehouse/NewWarehouse';
import NewWarehouseTypeModal from '@/components/Modals/Settings/Warehouse/NewWarehouseType';
import RankOrderModal from '@/components/Modals/Settings/Warehouse/RankOrder';
import ReturnLocationModal from '@/components/Modals/Settings/Warehouse/ReturnLocation';
import WarehouseDeactivateModal from '@/components/Modals/Settings/Warehouse/WarehouseDeactivate';
import WarehouseHistoryModal from '@/components/Modals/Settings/Warehouse/WarehouseHistory';
import { modalType } from '@/utils/helpers/types';
import {
  ArrowLeftOutlined,
  CaretDownFilled,
  CarryOutOutlined,
  ColumnHeightOutlined,
  DatabaseOutlined,
  FileOutlined,
  FlagOutlined,
  HomeOutlined,
  HomeTwoTone,
  PaperClipOutlined,
  QuestionCircleTwoTone,
  StopOutlined,
  ToolFilled,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Col, Dropdown, Row, Space } from 'antd';
import { useState } from 'react';

export default function () {
  const [modalOpen, setModalOpen] = useState('');
  const [showInactive, setShowInactive] = useState(false);
  const {
    warehouseList,
    setSelectedWarehouse,
    selectedWarehouse,
    updateWarehouse,
    getWarehouseHistory,
  } = useModel('warehouse');

  return (
    <div className="w-full">
      <Card>
        <Row gutter={5}>
          <Col span={24}>
            <OButton
              btnText={'New Warehouse'}
              onClick={() => setModalOpen(modalType.Void)}
              style={{ marginRight: '5px' }}
            />
            <OButton
              btnText={showInactive ? 'Show Active' : 'Show Inactive'}
              onClick={() => {
                setShowInactive((prev) => !prev);
              }}
              style={{ marginRight: '5px' }}
            />
          </Col>
        </Row>
        <Row gutter={5} style={{ marginTop: '1rem' }}>
          <Col span={12}>
            {warehouseList
              ?.filter((_item) => Boolean(_item.status) == !showInactive)
              .map((_item) => (
                <Card key={_item.id} style={{ width: 300, marginTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                        color: '#A2A2A2',
                      }}
                    >
                      <HomeTwoTone style={{ fontSize: '1rem' }} /> {_item.name}
                    </div>
                    <div>
                      <Dropdown
                        menu={{
                          items: [
                            {
                              key: '1',
                              label: (
                                <span
                                  onClick={() => {
                                    setSelectedWarehouse(_item);
                                    setModalOpen(modalType.WarehouseBasicInfo);
                                  }}
                                >
                                  <HomeOutlined /> Basic Info & I.D Color
                                </span>
                              ),
                            },
                            {
                              key: '2',
                              label: (
                                <span
                                  onClick={() => {
                                    setSelectedWarehouse(_item);
                                    setModalOpen(modalType.WarehouseReturnLocation);
                                  }}
                                >
                                  <ArrowLeftOutlined /> Return Location{' '}
                                </span>
                              ),
                            },
                            {
                              key: '3',
                              label: (
                                <span>
                                  <DatabaseOutlined />
                                  Secondary Addresses
                                </span>
                              ),
                            },
                            {
                              key: '4',
                              label: (
                                <span
                                  onClick={() => {
                                    setSelectedWarehouse(_item);
                                    setModalOpen(modalType.DocumentPrintSettings);
                                  }}
                                >
                                  <FileOutlined /> Document Print Settings{' '}
                                </span>
                              ),
                            },
                            {
                              key: '5',
                              label: (
                                <span
                                  onClick={() => {
                                    setSelectedWarehouse(_item);
                                    setModalOpen(modalType.RankOrder);
                                  }}
                                >
                                  <FlagOutlined /> International Rank{' '}
                                </span>
                              ),
                            },
                            {
                              key: '6',
                              label: (
                                <span>
                                  <ColumnHeightOutlined /> Domestic Backup Order{' '}
                                </span>
                              ),
                            },
                            {
                              key: '7',
                              label: (
                                <span>
                                  <PaperClipOutlined /> Inventory Dependents{' '}
                                </span>
                              ),
                            },
                            {
                              key: '8',
                              label: (
                                <span
                                  onClick={() => {
                                    setSelectedWarehouse(_item);
                                    setModalOpen(modalType.WarehouseDeactivate);
                                  }}
                                >
                                  <StopOutlined /> {showInactive ? 'Activate' : 'Deactivate'}
                                </span>
                              ),
                            },
                            {
                              key: '9',
                              label: (
                                <span
                                  onClick={() => {
                                    getWarehouseHistory(_item.id);
                                    setModalOpen(modalType.WarehouseHistory);
                                  }}
                                >
                                  <CarryOutOutlined /> History
                                </span>
                              ),
                            },
                          ],
                        }}
                      >
                        <Space
                          style={{
                            border: '1px solid #ccc',
                            padding: '0.2rem',
                            borderRadius: '0.2rem',
                          }}
                        >
                          <CaretDownFilled />
                          <ToolFilled />
                        </Space>
                      </Dropdown>
                    </div>
                  </div>
                  <br />
                  <p>{_item.address1}</p>
                  <p>{_item.address2}</p>
                  <p>{_item.address3}</p>
                  <br />
                  <p>Phone: {_item.phone}</p>
                  <p>
                    <QuestionCircleTwoTone /> International Rank: {_item.rank}
                  </p>
                </Card>
              ))}
          </Col>
        </Row>
      </Card>

      {/* Modals */}
      <NewWarehouseTypeModal
        isOpen={modalOpen === modalType.Void}
        onClose={() => setModalOpen(modalType.Close)}
        handleOpenNew={() => setModalOpen(modalType.New)}
      />

      <NewWarehouseModal
        isOpen={modalOpen === modalType.New}
        onSave={() => setModalOpen(modalType.WarehouseShippingZones)}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <AddShippingZonesModal
        isOpen={modalOpen === modalType.WarehouseShippingZones}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <BasicInfoModal
        isOpen={modalOpen === modalType.WarehouseBasicInfo}
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <ReturnLocationModal
        isOpen={modalOpen === modalType.WarehouseReturnLocation}
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <DocumentPrintSettingsModal
        isOpen={modalOpen === modalType.DocumentPrintSettings}
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <RankOrderModal
        isOpen={modalOpen === modalType.RankOrder}
        onSave={() => setModalOpen(modalType.Close)}
        onClose={() => setModalOpen(modalType.Close)}
      />

      <WarehouseDeactivateModal
        isOpen={modalOpen === modalType.WarehouseDeactivate}
        onSave={() => {
          updateWarehouse(selectedWarehouse.id, { status: showInactive });
          setModalOpen(modalType.Close);
        }}
        onClose={() => setModalOpen(modalType.Close)}
        activate={showInactive}
      />

      <WarehouseHistoryModal
        isOpen={modalOpen === modalType.WarehouseHistory}
        onClose={() => setModalOpen(modalType.Close)}
      />
    </div>
  );
}
