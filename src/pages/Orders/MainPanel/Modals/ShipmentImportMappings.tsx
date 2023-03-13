import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, ToolOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Space, Popconfirm } from 'antd';
import { useMemo } from 'react';

interface IShipmentImportMappings {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const ShipmentImportMappingsModal: React.FC<IShipmentImportMappings> = ({ isOpen, onClose, onAdd }) => {
  const { shipmentImportSettings, removeShipmentImportSettings, setEditableImportSetting } = useModel('shipmentImportSettings');

  const mappingRows = useMemo(
    () => shipmentImportSettings.map((item) => ({ mappings: item.name, key: item.key })),
    [shipmentImportSettings],
  );

  const handleEdit = (key) => {
    setEditableImportSetting(shipmentImportSettings.find((item) => item.key === key));
    onAdd();
  };

  const handleAdd = () => {
    setEditableImportSetting(null);
    onAdd();
  };

  const TColumns = [
    {
      key: 'mappings',
      dataIndex: 'mappings',
      title: 'Mappings',
    },
    {
      key: 'actions',
      dataIndex: 'key',
      title: '',
      render: (key) => (
        <div style={{ textAlign: 'center' }}>
          <Space>
            <ToolOutlined onClick={() => handleEdit(key)} style={{ color: 'blue', cursor: 'pointer', fontSize: 12 }} />
            <Popconfirm
              title={'Sure to remove?'}
              onConfirm={() => {
                removeShipmentImportSettings(key);
              }}
            >
              <CloseOutlined style={{ color: 'blue', cursor: 'pointer', fontSize: 12 }} />
            </Popconfirm>
          </Space>
        </div>
      ),
    },
  ];

  return (
    <OModal
      title="Shipment import mappings"
      helpLink="/help/orders/general"
      width={400}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
      ]}
    >
      <>
        <Card title={<OButton btnText="New Mapping" onClick={handleAdd} />}>
          <OTable pagination={false} columns={TColumns} rows={mappingRows} />
        </Card>
      </>
    </OModal>
  );
};

export default ShipmentImportMappingsModal;
