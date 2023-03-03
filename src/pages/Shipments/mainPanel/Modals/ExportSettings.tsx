import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, ToolOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Popconfirm, Space } from 'antd';
import React, { useState } from 'react';
import ExportSettingsEditModal from './ExportSettingsEdit';

interface IExportSettingsModal {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const ExportSettingsModal: React.FC<IExportSettingsModal> = ({ isOpen, title, onClose }) => {
  const { rmaExportSettings, removeRmaExportSettings, setEditableRmaExportSetting } = useModel('rmaExportSettings');
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (_item) => {
    console.log(_item);
    setEditableRmaExportSetting(_item);
    setShowModal(true);
  };

  const settings = rmaExportSettings.map((_item, _index) => ({
    setting: _item.settingName.toUpperCase(),
    actions: (
      <div style={{ textAlign: 'center' }}>
        <Space>
          <ToolOutlined onClick={() => handleEdit(_item)} style={{ color: 'blue', cursor: 'pointer', fontSize: 12 }} />
          <Popconfirm
            title={'Sure to remove?'}
            onConfirm={() => {
              removeRmaExportSettings(_index);
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
      title={title}
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
            setEditableRmaExportSetting(null);
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

        <ExportSettingsEditModal isOpen={showModal} onSave={() => setShowModal(false)} onClose={() => setShowModal(false)} />
      </>
    </OModal>
  );
};

export default ExportSettingsModal;
