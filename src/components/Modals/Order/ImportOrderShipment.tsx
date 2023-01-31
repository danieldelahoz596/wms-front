import React from 'react';
import { Button, Col, Form, Row, Upload } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { OButton } from '@/components/Globals/OButton';

interface IImportOrderShipment {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onConfigure: () => void;
}

const ImportOrderShipment: React.FC<IImportOrderShipment> = ({
  isOpen, onClose, onSave,
  onConfigure,
}) => {
  const updateShipmentOptions = [
    {
      value: '1',
      text: 'Yes - Update existing shipments and import now.',
    },
    {
      value: '2',
      text: 'No - Ignore existing shipments, only import new.',
    },
  ];
  return (
    <OModal
      title="External Shipment Import"
      width={1000}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Continue',
          onClick: onSave,
        },
      ]}
    >
      <>
        <p>
          External shipments are any shipments that were not processed through Skubana shipping
          module. This includes shipments for orders that were fulfilled by a channel (e.g. Amazon
          FBA), a 3PL, a dropship vendor, or any other source outside of Skubana. This is the batch
          import equivalent of <b>marking orders as "Shipped".</b>
        </p>
        <Row gutter={32}>
          <Col span={14}>
            <div
              style={{
                background: '#DEE0FF',
                border: '1px solid #AFB4FF',
                padding: '1rem',
                margin: '1rem 0',
              }}
            >
              <p>
                All import of external shipments into Skubana are preformed using the Microsoft Excel
                spreadsheet format. In order to generate the appropriate template to use for your
                imports and ensure there is no ambiguity as to which channels and carriers. Please
                note that mappings are not case sensitive.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                <OButton
                  type="primary"
                  btnText={'CONFIGURE'}
                  bordered={true}
                  onClick={onConfigure}
                />
                <span>Import Settings:</span>
                <OInput type="select" placeholder="Select.." options={[]} style={{ flex: 1 }} />
                <Button type="primary" style={{ border: '1px solid #AFB4FF', padding: '2px 16px' }}>
                  <VerticalAlignBottomOutlined size={16} />
                </Button>
              </div>
            </div>
          </Col>
          <Col span={10}>
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Form.Item label="Excel Shipment File: ">
                <Upload {...fileUploadProps}>
                  <Button icon={<UploadOutlined />}>Select...</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <label>Update existing shipments if changes found in the Excel file?</label>
                <OInput type="select" options={updateShipmentOptions} placeholder="Select.." />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ImportOrderShipment;
