import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, ToolOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card } from 'antd';
import React from 'react';

interface IOrderImportSettingsModal {
  isOpen: boolean;
  onClose: () => void;
  onAddOrderImportSettings: () => void;
}

const OrderImportSettingsModal: React.FC<IOrderImportSettingsModal> = ({
  isOpen,
  onClose,
  onAddOrderImportSettings,
}) => {
  const { orderImportSettings, removeOrderImportSettings, setEditableImportSetting } =
    useModel('orderImportSettings');

  const handleEdit = (_item) => {
    setEditableImportSetting(_item);
    onAddOrderImportSettings();
  };
  const settings = orderImportSettings.map((_item, _index) => ({
    setting: _item.settingName,
    actions: (
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <ToolOutlined
          onClick={() => handleEdit(_item)}
          style={{ color: 'blue', cursor: 'pointer', marginRight: '0.5rem' }}
        />
        <CloseOutlined
          onClick={() => removeOrderImportSettings(_index)}
          style={{ color: 'blue', cursor: 'pointer' }}
        />
      </div>
    ),
  }));

  return (
    <OModal
      title="Order import settings"
      helpLink="/help/orders/general"
      width={600}
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
        <Card title={<OButton btnText="New Settings" onClick={onAddOrderImportSettings} />}>
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

export default OrderImportSettingsModal;
