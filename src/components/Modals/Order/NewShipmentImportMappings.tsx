import React from 'react';
import { Card, Col, Form, Row } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { OInput } from '@/components/Globals/OInput';

interface INewShipmentImportMappings {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const NewShipmentImportMappingsModal: React.FC<INewShipmentImportMappings> = ({
  isOpen,
  onSave,
  onClose,
}) => {
  const importFieldsColumns = [
    {
      key: 'sl',
      dataIndex: 'sl',
      title: '',
    },
    {
      key: 'dataField',
      dataIndex: 'dataField',
      title: 'DATA FIELD',
    },
    {
      key: 'columnName',
      dataIndex: 'columnName',
      title: 'COLUMN NAME',
    },
  ];

  const importFieldsRows = [
    {
      sl: 1,
      dataField: 'order number',
      columnName: 'order number',
    },
    {
      sl: 2,
      dataField: 'order date',
      columnName: 'order date',
    },
    {
      sl: 3,
      dataField: 'payment date',
      columnName: 'payment date',
    },
    {
      sl: 4,
      dataField: 'ship to name',
      columnName: 'ship to name',
    },
    {
      sl: 5,
      dataField: 'ship to address 1',
      columnName: 'ship to address 1',
    },
    {
      sl: 6,
      dataField: 'ship to city',
      columnName: 'ship to city',
    },
    {
      sl: 7,
      dataField: 'ship to state',
      columnName: 'ship to state',
    },
    {
      sl: 8,
      dataField: 'ship to zip code',
      columnName: 'ship to zip code',
    },
  ];

  const preparedImportFieldsRows = importFieldsRows.map((item) => ({
    ...item,
    dataField: item.dataField.toUpperCase(),
    columnName: item.columnName.toUpperCase(),
  }));

  return (
    <OModal
      title="New Shipment Import Mappings"
      width={1000}
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
          btnLabel: 'Save',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Row className='mb-10'>
          <Col span={12}>
            <Form>
              <Form.Item name={'fileFormat'} label="Add Optional Field">
                <OInput type="select" placeholder="Select..." options={[]} />
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>&nbsp;</Col>
        </Row>
        <Row gutter={12}>
          <Col span={8}>
            <Card title="Sales Channel Mappings" style={{ padding: '0.5rem' }}>
              <OTable
                pagination={false}
                columns={importFieldsColumns}
                rows={preparedImportFieldsRows}
              />
            </Card>
          </Col>
          <Col span={16}>
            <Card title="Shipping Carrier Mappings" style={{ padding: '0.5rem' }}>
              <Form>
                <Form.Item name={'fileFormat'} label="Add Optional Field">
                  <OInput type="select" placeholder="Select..." options={[]} />
                </Form.Item>
              </Form>
              <OTable
                pagination={false}
                columns={importFieldsColumns}
                rows={preparedImportFieldsRows}
              />
            </Card>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default NewShipmentImportMappingsModal;
