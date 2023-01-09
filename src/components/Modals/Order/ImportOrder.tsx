import React, { useState } from 'react';
import { Button, Col, Form, Row, Upload } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';
import { modalType } from '@/utils/helpers/types';

interface IImportOrder {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  handleConfigureSettings: (value: any) => void;
}

const ImportOrderModal: React.FC<IImportOrder> = ({
  isOpen,
  onClose,
  onSave,
  handleConfigureSettings,
}) => {
  const { orderImportSettings } = useModel('orderImportSettings');
  const [selectedSettings, setSelectedSettings] = useState();

  const handleSettingsSelect = (_value) => {
    if (_value == 0) {
      setSelectedSettings(null);
    } else {
      const _selectedFullSettings = orderImportSettings.find(
        (_item, _index) => _index + 1 == _value,
      );
      setSelectedSettings(_selectedFullSettings);
    }
  };

  const onConfigureSettings = () => {
    if (selectedSettings) {
      handleConfigureSettings(modalType.OrderImportSettings);
    } else {
      handleConfigureSettings(modalType.AddOrderImportSettings);
    }
  };

  return (
    <OModal
      title="MANUAL IMPORT ORDERS"
      width={1000}
      className="OModal"
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CANCEL',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'CONTINUE',
          onClick: onSave,
        },
      ]}
    >
      <>
        <p>
          All orders for your manual channels can be imported into Skubana using as many custom
          format files as your workflow demands. Manually imported orders go through the same
          process as all others, including validation, assignment of a default fulfillment source,
          Orderbots, and detarmination of inventory availability.
        </p>
        <Row gutter={32}>
          <Col span={16}>
            <div
              style={{
                background: '#DEE0FF',
                border: '1px solid #AFB4FF',
                padding: '1rem',
                margin: '1rem 0',
              }}
            >
              <p>
                All manual order for your imports into Skubana must be performed using a
                pre-configured setting of the file format (CSV, EXCEL, TEXT) and column structure of
                your choice.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                <OButton
                  type="primary"
                  btnText={'CONFIGURE'}
                  bordered={true}
                  onClick={onConfigureSettings}
                />
                <span>Import Settings:</span>
                <OInput
                  type="select"
                  placeholder="Select.."
                  options={[
                    { value: '0', text: 'Select ...' },
                    ...orderImportSettings.map((_item, _index) => ({
                      value: `${_index + 1}`,
                      text: _item.settingName,
                    })),
                  ]}
                  style={{ flex: 1 }}
                  onChange={(_name, _value) => handleSettingsSelect(_value)}
                />
              </div>
            </div>
          </Col>
          <Col span={8}>
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Form.Item label="Order Import File: ">
                <Upload {...fileUploadProps}>
                  <Button icon={<UploadOutlined />}>SELECT...</Button>
                </Upload>
              </Form.Item>

              <Form.Item label="Manual Sales Channel: ">
                <OInput type="select" options={[]} placeholder="Select.." />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ImportOrderModal;
