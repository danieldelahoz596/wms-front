import React, { useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';
import { modalType } from '@/utils/helpers/types';
import { Col, Row } from 'antd';

interface IExportOrder {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  handleConfigureSettings: (value: any) => void;
}

const ExportOrderModal: React.FC<IExportOrder> = ({
  isOpen, onClose, onSave,
  handleConfigureSettings,
}) => {
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

  const onConfigureSettings = () => {
    if (selectedSettings) {
      handleConfigureSettings(modalType.OrderExportSettings);
    } else {
      handleConfigureSettings(modalType.AddOrderExportSettings);
    }
  };

  return (
    <OModal
      title="Export selected orders"
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
      
      </>
      <p>Skubana allows you to export any of the available order information in CSV, Excel, or plain text format.
      </p>
      <p>
        To export the selected orders, select one of your pre-configured export settings and click
        the 'Export Orders' button. If you haven't created any export settings yet, click on the
        "Configure Settings" button to set up which order data to export, the arrangement of
        columns and the file format.
      </p>
      <Row style={{ alignItems: 'center', padding: '1rem' }}>
        <span>Export Settings:</span>
        <OInput
          type="select"
          placeholder="Select.."
          options={[
            ...orderExportSettings.map((_item, _index) => ({
              value: `${_index + 1}`,
              text: _item.settingName,
            })),
          ]}
          style={{ flex: 1 }}
          onChange={(_name, _value) => handleSettingsSelect(_value)}
        />
        <OButton
          type="primary"
          btnText={'Configure Settings'}
          bordered={true}
          onClick={onConfigureSettings}
          className='ml-10'
        />
      </Row>
      <div >
        
        
      </div>
    </OModal>
  );
};

export default ExportOrderModal;
