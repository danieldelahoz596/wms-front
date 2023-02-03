import React, { useState } from 'react';
import { Card } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, ToolOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
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
    setting: _item.settingName,
    actions: (
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <ToolOutlined
          onClick={() => handleEdit(_item)}
          style={{ color: 'blue', cursor: 'pointer', marginRight: '0.5rem' }}
        />
        <CloseOutlined
          onClick={() => removeCustomBundleKitExportSettings(_index)}
          style={{ color: 'blue', cursor: 'pointer' }}
        />
      </div>
    ),
  }));

  return (
    <OModal
      title="Custom Bundle/Kit Export Settings"
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
        <Card
          title={
            <OButton
              type="primary"
              btnText={'New Settings'}
              onClick={() => {
                setEditableBundleKitExportSetting(null);
                setShowModal(true);
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
