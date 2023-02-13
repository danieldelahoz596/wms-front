import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, ToolOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Popconfirm, Space } from 'antd';
import React, { useState } from 'react';
import AddExportSettingsModal from './AddExportSettings';

interface ICustomBundleKitExportSettings {
  isOpen: boolean;
  onClose: () => void;
}

const CustomBundleKitExportSettings: React.FC<ICustomBundleKitExportSettings> = ({
  isOpen,
  onClose,
}) => {
  const {
    customBundleKitExportSettings,
    removeCustomBundleKitExportSettings,
    setEditableBundleKitExportSetting,
  } = useModel('customBundleKitExportSettings');
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (_item) => {
    console.log(_item);
    setEditableBundleKitExportSetting(_item);
    setShowModal(true);
  };

  const settings = customBundleKitExportSettings.map((_item, _index) => ({
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
              removeCustomBundleKitExportSettings(_index);
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
      title="Custom Bundle/Kit Export Settings"
      helpLink="/help/products/export/custombundlekit"
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
            setEditableBundleKitExportSetting(null);
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

export default CustomBundleKitExportSettings;
