import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import LaunchIcon from '@/utils/icons/launch';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Select, Space } from 'antd';
import React, { useMemo, useState } from 'react';
import ExportSettingsModal from './ExportSettings';

interface IExportSelectedRmasModal {
  isOpen: boolean;
  type: string;
  onClose: () => void;
  onSave: () => void;
}

const ExportSelectedRmasModal: React.FC<IExportSelectedRmasModal> = ({ isOpen, type, onClose, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const { rmaExportSettings } = useModel('rmaExportSettings');

  const rmaExportSettingOptions = useMemo(
    () =>
      rmaExportSettings.map((_item) => ({
        value: _item.id,
        label: _item.settingName,
      })),
    [rmaExportSettings],
  );

  return (
    <OModal
      title={`Export Selected ${type}s`}
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
        {
          key: 'submit',
          type: 'primary',
          btnLabel: (
            <>
              <VerticalAlignBottomOutlined /> Export Rmas
            </>
          ),
          onClick: () => onSave(),
        },
      ]}
    >
      <>
        <div style={{ textAlign: 'center' }}>
          <LaunchIcon style={{ fontSize: 60, stroke: 'skyblue' }} />
        </div>
        <p>Skubana allows you to export any of the available product information in CSV, Excel, or plain text format.</p>
        <p>
          {`To export the selected ${type}s, select one of your pre-configured export settings and
          click the 'Export ${type}s' button. If you haven't created any export settings yet,
          clik on the 'Configure Settings' button to set up which ${type} data to export, the
          arrangement of columns and the file format.`}
        </p>
        <div style={{ textAlign: 'right', marginTop: 40 }}>
          <Space size={5}>
            <span>Export Settings: </span>
            <Select
              placeholder="Select..."
              size="small"
              style={{ width: 200, textAlign: 'left' }}
              options={rmaExportSettingOptions}
            />
            <OButton btnText="Configure Settings" onClick={() => setShowModal(true)} />
          </Space>
        </div>

        <ExportSettingsModal isOpen={showModal} title={`${type} Export Settings`} onClose={() => setShowModal(false)} />
      </>
    </OModal>
  );
};

export default ExportSelectedRmasModal;
