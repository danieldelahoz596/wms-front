import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OSelect } from '@/components/Globals/OSelect';
import { useModel } from '@umijs/max';
import { Button, Col, Row, Select, Form, Space } from 'antd';
import React from 'react';
import { useState } from 'react';
import CustomBundleKitExportSettings from './CustomBundleKitExportSettings';

interface ICustomBundleKitExport {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const CustomBundleKitExport: React.FC<ICustomBundleKitExport> = ({ isOpen, onClose, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const { customBundleKitExportSettings } = useModel('customBundleKitExportSettings');

  return (
    <OModal
      title={'Custom Bundle/Kit Export'}
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
        <p>
          Skubana allows you to export any of the available product information in CSV, Excel, or
          plain text format.
        </p>
        <p>
          {`To export the selected products, select one of your pre-configured export settings and
          click the 'Export Bundles/Kits' button. If you haven't created any export settings yet,
          clik on the 'Configure Settings' button to set up which product data to export, the
          arrangement of columns and the file format.`}
        </p>
        <Space size={5}>
          <label>Export Settings: </label>
          <OSelect 
            name="export_settings"
            style={{ width: 200 }}
            options={customBundleKitExportSettings.map((item) => ({
              value: item.id,
              text: item.settingName,
            }))}
            onChange={() => {}}
          />
          <OButton onClick={() => setShowModal(true)} btnText="Configure Settings" />
        </Space>

        <CustomBundleKitExportSettings isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    </OModal>
  );
};

export default CustomBundleKitExport;
