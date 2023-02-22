import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Select, Space } from 'antd';
import React, { useState } from 'react';
import CustomBundleKitExportSettings from './CustomBundleKitExportSettings';

interface IExportCustomBundleKitModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportCustomBundleKitModal: React.FC<IExportCustomBundleKitModal> = ({ isOpen, onClose, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const { customBundleKitExportSettings } = useModel('customBundleKitExportSettings');

  return (
    <OModal
      title="Custom Bundle/Kit Export"
      helpLink="/help/products/export/custombundlekit"
      width={500}
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
          btnLabel: 'Export Bundles/Kits',
          onClick: () => onSave(),
        },
      ]}
    >
      <>
        <p>Skubana allows you to export any of the available product information in CSV, Excel, or plain text format.</p>
        <p>
          {`To export the selected products, select one of your pre-configured export settings and
          click the 'Export Bundles/Kits' button. If you haven't created any export settings yet,
          clik on the 'Configure Settings' button to set up which product data to export, the
          arrangement of columns and the file format.`}
        </p>
        <div style={{ textAlign: 'right', marginTop: 40 }}>
          <Space size={5}>
            <span>Export Settings: </span>
            <Select
              placeholder="Select..."
              size="small"
              style={{ width: 200, textAlign: 'left' }}
              options={customBundleKitExportSettings.map((_item) => ({
                value: _item.id,
                label: _item.settingName,
              }))}
            />
            <OButton btnText="Configure Settings" onClick={() => setShowModal(true)} />
          </Space>
        </div>

        <CustomBundleKitExportSettings isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    </OModal>
  );
};

export default ExportCustomBundleKitModal;
