import React from 'react';
import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import { EditableTable } from '@/utils/components/EditableTable';

interface INewVendorProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const NewVendorProduct: React.FC<INewVendorProduct> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  const productDetailsInputFields = [
    {
      type: 'select',
      onChange: () => {},
      label: 'Vendor:',
      name: 'vendor',
      defaultValue: 'cool-stuff',
      options: [
        {
          value: 'cool-stuff',
          text: 'Cool Stuff',
        },
      ],
      style: { width: '100%' },
    },
    {
      type: 'text',
      onChange: () => {},
      label: 'Vendor SKU:',
      name: 'vendorSku',
    },
    {
      type: 'number',
      onChange: () => {},
      label: 'Minimum Order Qty:',
      name: 'minOrderQty',
      render: (inputField: any) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {inputField} <span>Unit(s)</span>
        </div>
      ),
    },
    {
      type: 'number',
      onChange: () => {},
      label: 'Lead Time:',
      name: 'minOrderQty',
      render: (inputField: any) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {inputField} <span>Day(s)</span>
        </div>
      ),
    },
    {
      type: 'select',
      onChange: () => {},
      label: 'Auto-P.O. Rounding:',
      name: 'autoPoRounding',
      defaultValue: 'round-properly',
      options: [
        {
          value: 'round-properly',
          text: 'Round Properly',
        },
      ],
      style: { width: '100%' },
    },
    {
      type: 'text',
      onChange: () => {},
      label: 'Packaging:',
      name: 'packaging',
    },
  ];

  const pricingTiersInputsFields = [
    {
      type: 'number',
      label: 'From: ',
      name: 'from',
      onChange: () => {},
    },
    {
      type: 'number',
      label: 'To: ',
      name: 'to',
      onChange: () => {},
    },
    {
      type: 'number',
      label: 'Cost: ',
      name: 'cost',
      onChange: () => {},
    },
  ];

  const pricingTiersData = {
    columns: [
      {
        key: 'fromQty',
        dataIndex: 'fromQty',
        title: 'From Quantity',
      },
      {
        key: 'toQty',
        dataIndex: 'toQty',
        title: 'To Quantity',
      },
      {
        key: 'cost',
        dataIndex: 'cost',
        title: 'Cost',
      },
      {
        key: 'action',
        dataIndex: 'action',
        title: '',
      },
    ],
    rows: [
      {
        formQty: 1,
        toQty: 500,
        cost: '$5.00',
        action: <CloseOutlined style={{ color: 'blue' }} />,
      },
      {
        formQty: 5001,
        toQty: 2000,
        cost: '$4.00',
        action: <CloseOutlined style={{ color: 'blue' }} />,
      },
    ],
  };

  const unitMeasureData = {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        editable: true,
      },
      {
        title: 'Unit Quantity',
        dataIndex: 'unitQty',
        key: 'unitQty',
        editable: true,
      },
      {
        title: '',
        dataIndex: 'action',
        key: 'action',
      },
    ],
    rows: [
      {
        name: 'carton',
        unitQty: '100',
        action: <CloseOutlined style={{ color: 'blue' }} />,
      },
    ],
  };

  return (
    <OModal
      title={'New Vendor Product'}
      width={1000}
      centered
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <Row gutter={20}>
        <Col span={8}>
          <Card title="PRODUCT DETAILS">
            {productDetailsInputFields?.map((inputItem, index) => (
              <div key={index} style={{ padding: '0.5rem 0' }}>
                <div>{inputItem.label}</div>
                <OInput {...inputItem} />
              </div>
            ))}
          </Card>
        </Col>
        <Col span={16}>
          <Card title="PRICING TIERS">
            <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1rem' }}>
              {pricingTiersInputsFields?.map((inputItem, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                  <div>{inputItem.label}</div>
                  <OInput {...inputItem} />
                </div>
              ))}
              <OButton type="primary" btnText={'ADD'} style={{ border: '1px solid blue' }} />
            </div>
            <OTable
              columns={pricingTiersData.columns}
              rows={pricingTiersData.rows}
              pagination={false}
            />
          </Card>
          <Card title="UNITS OF MEASURE">
            <EditableTable
              dataSource={unitMeasureData.rows}
              columns={unitMeasureData.columns}
              handleSave={() => {}}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </OModal>
  );
};

export default NewVendorProduct;
