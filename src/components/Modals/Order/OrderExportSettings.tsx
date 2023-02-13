import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, ToolOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Popconfirm, Space } from 'antd';
import React, { useState } from 'react';
import AddExportSettingsModal from './AddExportSettings';

interface IOrderExportSettingsModal {
  isOpen: boolean;
  onClose: () => void;
  // onAddOrderExportSettings: () => void;
}

const OrderExportSettingsModal: React.FC<IOrderExportSettingsModal> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const { orderExportSettings, removeOrderExportSettings, setEditableExportSetting } =
    useModel('orderExportSettings');

  const handleEdit = (_item) => {
    console.log(_item);
    setEditableExportSetting(_item);
    setShowModal(true);
  };

  const settings = orderExportSettings.map((_item, _index) => ({
    setting: _item.settingName.toUpperCase(),
    actions: (
      <div style={{ textAlign: 'center' }}>
        <Space>
          <ToolOutlined
            onClick={() => handleEdit(_item)}
            style={{ color: 'blue', cursor: 'pointer', fontSize: 12 }}
          />
          <Popconfirm
            title={'Sure to remove?'}
            onConfirm={() => {
              removeOrderExportSettings(_index);
            }}
          >
            <CloseOutlined style={{ color: 'blue', cursor: 'pointer', fontSize: 12 }} />
          </Popconfirm>
        </Space>
      </div>
    ),
  }));

  return (
    <OModal
      title="Order Export Settings"
      helpLink='/help/orders/exportorders'
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
        <OButton
          btnText={'New Settings'}
          onClick={() => {
            setEditableExportSetting(null);
            setShowModal(true);
          }}
        />
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
          style={{ marginTop: 10 }}
        />

        <AddExportSettingsModal
          isOpen={showModal}
          onSave={() => setShowModal(false)}
          onClose={() => setShowModal(false)}
        />
      </>
    </OModal>
  );
};

export default OrderExportSettingsModal;
