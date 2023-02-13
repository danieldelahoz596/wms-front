import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Select, Space } from 'antd';
import React, { useState } from 'react';
import OrderExportSettingsModal from './OrderExportSettings';

interface IExportOrder {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  handleConfigureSettings: (value: any) => void;
}

const ExportOrderModal: React.FC<IExportOrder> = ({
  isOpen,
  onClose,
  onSave,
  handleConfigureSettings,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { orderExportSettings } = useModel('orderExportSettings');
  const [selectedSettings, setSelectedSettings] = useState();

  const handleSettingsSelect = (_value) => {
    if (_value == 0) {
      setSelectedSettings(null);
    } else {
      const _selectedFullSettings = orderExportSettings.find(
        (_item, _index) => _index + 1 == _value,
      );
      setSelectedSettings(_selectedFullSettings);
    }
  };

  // const onConfigureSettings = () => {
  //   if (selectedSettings) {
  //     handleConfigureSettings(modalType.OrderExportSettings);
  //   } else {
  //     handleConfigureSettings(modalType.AddOrderExportSettings);
  //   }
  // };

  return (
    <OModal
      title="Export Selected Orders"
      helpLink="/help/orders/general"
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
          btnLabel: 'Export orders',
          onClick: onSave,
        },
      ]}
    >
      <>
        <p>
          Skubana allows you to export any of the available order information in CSV, Excel, or
          plain text format.
        </p>
        <p>
          {`To export the selected orders, select one of your pre-configured export settings and click
          the 'Export Orders' button. If you haven't created any export settings yet, click on the
          'Configure Settings' button to set up which order data to export, the arrangement of
          columns and the file format.`}
        </p>
        <div style={{ textAlign: 'right', marginTop: 40 }}>
          <Space size={5}>
            <span>Export Settings: </span>
            <Select
              placeholder="Select..."
              size="small"
              style={{ width: 200, textAlign: 'left' }}
              options={orderExportSettings.map((_item) => ({
                value: _item.id,
                label: _item.settingName,
              }))}
            />
            <OButton btnText="Configure Settings" onClick={() => setShowModal(true)} />
          </Space>
        </div>

        <OrderExportSettingsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    </OModal>
  );
};

export default ExportOrderModal;
