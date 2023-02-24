import { OButton } from '@/components/Globals/OButton';
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
  ToolFilled
} from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Col, Dropdown, Row, Space } from 'antd';
import { useState } from 'react';
import AddShippingZonesModal from '../Modals/Warehouse/AddShippingZones';
import BasicInfoModal from '../Modals/Warehouse/BasicInfo';
import DocumentPrintSettingsModal from '../Modals/Warehouse/DocumentPrintSettings';
import NewWarehouseModal from '../Modals/Warehouse/NewWarehouse';
import NewWarehouseTypeModal from '../Modals/Warehouse/NewWarehouseType';
import RankOrderModal from '../Modals/Warehouse/RankOrder';
import ReturnLocationModal from '../Modals/Warehouse/ReturnLocation';
import WarehouseDeactivateModal from '../Modals/Warehouse/WarehouseDeactivate';
import WarehouseHistoryModal from '../Modals/Warehouse/WarehouseHistory';

export default function () {
  const [modalOpen, setModalOpen] = useState('');
  const [showInactive, setShowInactive] = useState(false);
  const { warehouseList, setSelectedWarehouse, selectedWarehouse, updateWarehouse, getWarehouseHistory } = useModel('warehouse');

  return (
    <div className="w-full main-panel">
      <div className="title-row">
        <h1 className="page-title">Warehouses</h1>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton
            btnText={<FormattedMessage id="pages.settings.warehouses.newWarehouse" />}
            onClick={() => setModalOpen(modalType.Void)}
          />
          <OButton
            btnText={
              showInactive ? (
                <FormattedMessage id="component.button.showActive" />
              ) : (
                <FormattedMessage id="component.button.showInactive" />
              )
            }
            onClick={() => {
              setShowInactive((prev) => !prev);
            }}
          />
        </Space>
        <Row gutter={5}>
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
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <HomeOutlined />
                                    <FormattedMessage id="pages.settings.warehouses.basicInfo" />
                                  </Space>
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
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <ArrowLeftOutlined />
                                    <FormattedMessage id="pages.settings.warehouses.returnLocation" />
                                  </Space>
                                </span>
                              ),
                            },
                            {
                              key: '3',
                              label: (
                                <span>
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <DatabaseOutlined />
                                    <FormattedMessage id="pages.settings.warehouses.secondaryAddresses" />
                                  </Space>
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
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <FileOutlined />
                                    <FormattedMessage id="pages.settings.warehouses.documentPrintSettings" />
                                  </Space>
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
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <FlagOutlined />
                                    <FormattedMessage id="pages.settings.warehouses.internationalRank" />
                                  </Space>
                                </span>
                              ),
                            },
                            {
                              key: '6',
                              label: (
                                <span>
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <ColumnHeightOutlined />
                                    <FormattedMessage id="pages.settings.warehouses.domesticBackupOrder" />
                                  </Space>
                                </span>
                              ),
                            },
                            {
                              key: '7',
                              label: (
                                <span>
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <PaperClipOutlined />
                                    <FormattedMessage id="pages.settings.warehouses.inventoryDependents" />
                                  </Space>
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
                                  <Space size={HORIZONTAL_SPACE_SIZE}>
                                    <StopOutlined />
                                    {showInactive ? (
                                      <FormattedMessage id="pages.settings.warehouses.activate" />
                                    ) : (
                                      <FormattedMessage id="pages.settings.warehouses.deactivate" />
                                    )}
                                  </Space>
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
                                  <CarryOutOutlined /> <FormattedMessage id="pages.settings.warehouses.history" />
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

      <WarehouseHistoryModal isOpen={modalOpen === modalType.WarehouseHistory} onClose={() => setModalOpen(modalType.Close)} />
    </div>
  );
}
