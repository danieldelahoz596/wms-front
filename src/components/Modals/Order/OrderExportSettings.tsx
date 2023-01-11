import React from 'react';
import { Card } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, ToolOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';

interface IOrderExportSettingsModal {
  isOpen: boolean;
  onClose: () => void;
  onAddOrderExportSettings: () => void;
}

const OrderExportSettingsModal: React.FC<IOrderExportSettingsModal> = ({
  isOpen,
  onClose,
  onAddOrderExportSettings,
}) => {
  const { orderExportSettings, removeOrderExportSettings, setEditableExportSetting } =
    useModel('orderExportSettings');

  const handleEdit = (_item) => {
    console.log(_item);
    setEditableExportSetting(_item);
    onAddOrderExportSettings();
  };

  const settings = orderExportSettings.map((_item, _index) => ({
    setting: _item.settingName,
    actions: (
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <ToolOutlined
          onClick={() => handleEdit(_item)}
          style={{ color: 'blue', cursor: 'pointer', marginRight: '0.5rem' }}
        />
        <CloseOutlined
          onClick={() => removeOrderExportSettings(_index)}
          style={{ color: 'blue', cursor: 'pointer' }}
        />
      </div>
    ),
  }));

  return (
    <OModal
      title="ORDER EXPORT SETTINGS"
      width={600}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CLOSE',
          onClick: onClose,
        },
      ]}
    >
      <>
        <Card
          title={
            <OButton
              type="dashed"
              btnText={'New Settings'}
              onClick={() => {
                setEditableExportSetting(null);
                onAddOrderExportSettings();
              }}
            />
          }
        >
          <OTable
            pagination={false}
            columns={[
              {
                key: 'setting',
                dataIndex: 'setting',
                title: 'Settings',
              },
              {
                key: 'actions',
                dataIndex: 'actions',
                title: '',
              },
            ]}
            rows={settings}
          />
        </Card>
      </>
    </OModal>
  );
};

export default OrderExportSettingsModal;
