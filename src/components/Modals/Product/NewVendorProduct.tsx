import React, { useEffect, useState } from 'react';
import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { OModal } from '@/components/Globals/OModal';
import { CloseOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Card, Col, Row, Form, Table } from 'antd';
import { EditableTable } from '@/utils/components/EditableTable';
import { uuidv4 } from '@antv/xflow-core';

interface INewVendorProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  vendorProductList: any[];
  setVendorProductList: (newVendorProduct: any) => void;
  selectedItemKey: string;
  setSelectedItemkey: (key: any) => void;
  type: string;
}

const NewVendorProduct: React.FC<INewVendorProduct> = ({
  isOpen, onClose, onSave,
  vendorProductList,
  setVendorProductList,
  selectedItemKey,
  setSelectedItemkey,
  type,
}) => {
  const [newVendorProduct, setNewVendorProduct] = useState({
    vendor: '',
    vendorSku: '',
    minOrderQty: 0,
    leadTime: 0,
    autoPoRounding: '',
    packaging: '',
  });
  const [pricingTiers, setPricingTigers] = useState({
    from: '',
    to: '',
    cost: 0,
  });
  const [pricingTiersDataRows, setPricingTiersDataRows] = useState([]);
  const [unitMeasureDataRows, setUnitMeasureDataRows] = useState([]);

  const handleNewVendorProductChange = (name, value) => {
    setNewVendorProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePricingTiersChange = (name, value) => {
    setPricingTigers((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePricingTiersAdd = () => {
    setPricingTiersDataRows([
      ...pricingTiersDataRows,
      {
        key: uuidv4(),
        fromQty: pricingTiers.from,
        toQty: pricingTiers.to,
        cost: pricingTiers.cost,
      },
    ]);
  };

  const handleUnitMeasureAdd = () => {
    setUnitMeasureDataRows([
      ...unitMeasureDataRows,
      {
        key: uuidv4(),
        name: 'Name',
        unitQty: 'Unit Quantity',
      },
    ]);
  };

  const handleEditableTableChange = (key, name, value) => {
    setUnitMeasureDataRows(
      unitMeasureDataRows.map((row) =>
        row.key === key
          ? {
              ...row,
              [name]: value,
            }
          : row,
      ),
    );
  };

  const handleSave = () => {
    if (type === 'add')
      setVendorProductList([...vendorProductList, { ...newVendorProduct, key: uuidv4() }]);
    else if (type === 'edit') {
      setVendorProductList(
        vendorProductList.map((_item) =>
          _item.key === selectedItemKey ? newVendorProduct : _item,
        ),
      );
      setSelectedItemkey(null);
    }
    onSave();
  };

  useEffect(() => {
    if (type === 'add')
      setNewVendorProduct({
        vendor: '',
        vendorSku: '',
        minOrderQty: 0,
        leadTime: 0,
        autoPoRounding: '',
        packaging: '',
      });
    else if (type === 'edit') {
      const selecetedItem = vendorProductList.find((_item) => _item.key === selectedItemKey);
      setNewVendorProduct({ ...selecetedItem });
    }
  }, [isOpen]);

  const productDetailsInputFields = [
    {
      type: 'select',
      onChange: handleNewVendorProductChange,
      label: 'Vendor',
      name: 'vendor',
      defaultValue: newVendorProduct.vendor,
      value: newVendorProduct.vendor,
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
      onChange: handleNewVendorProductChange,
      label: 'Vendor SKU',
      name: 'vendorSku',
      defaultValue: newVendorProduct.vendorSku,
      value: newVendorProduct.vendorSku,
    },
    {
      type: 'number',
      onChange: handleNewVendorProductChange,
      label: 'Minimum Order Qty',
      name: 'minOrderQty',
      defaultValue: newVendorProduct.minOrderQty,
      value: newVendorProduct.minOrderQty,
      render: (inputField: any) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {inputField} <span>Unit(s)</span>
        </div>
      ),
    },
    {
      type: 'number',
      onChange: handleNewVendorProductChange,
      label: 'Lead Time',
      name: 'leadTime',
      defaultValue: newVendorProduct.leadTime,
      value: newVendorProduct.leadTime,
      render: (inputField: any) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {inputField} <span>Day(s)</span>
        </div>
      ),
    },
    {
      type: 'select',
      onChange: handleNewVendorProductChange,
      label: 'Auto-P.O. Rounding',
      name: 'autoPoRounding',
      defaultValue: newVendorProduct.autoPoRounding,
      value: newVendorProduct.autoPoRounding,
      options: [
        {
          value: 'exact',
          text: 'Exact',
        },
        {
          value: 'round-up',
          text: 'Round Up',
        },
        {
          value: 'round-properly',
          text: 'Round Properly',
        },
      ],
      style: { width: '100%' },
    },
    {
      type: 'text',
      onChange: handleNewVendorProductChange,
      label: 'Packaging',
      name: 'packaging',
      defaultValue: newVendorProduct.packaging,
      value: newVendorProduct.packaging,
      options: [
        {
          value: 'plastic',
          text: 'plastic',
        },
        {
          value: 'cardboard box',
          text: 'cardboard box',
        },
      ],
    },
  ];

  const pricingTiersInputsFields = [
    {
      type: 'text',
      label: 'From: ',
      name: 'from',
      defaultValue: 0,
      onChange: handlePricingTiersChange,
      value: pricingTiers.from,
    },
    {
      type: 'text',
      label: 'To: ',
      name: 'to',
      defaultValue: 0,
      onChange: handlePricingTiersChange,
      value: pricingTiers.to,
    },
    {
      type: 'number',
      label: 'Cost: ',
      name: 'cost',
      defaultValue: 0,
      onChange: handlePricingTiersChange,
      value: pricingTiers.cost,
    },
  ];

  const pricingTiersDataColumns = [
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
      title: '',
      render: (_, record) => (
        <span
          onClick={() =>
            setPricingTiersDataRows(pricingTiersDataRows.filter((item) => item.key !== record.key))
          }
        >
          <CloseOutlined style={{ color: 'blue' }} />
        </span>
      ),
    },
  ];

  const unitMeasureDataColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name < b.name,
      editable: true,
    },
    {
      title: 'Unit Quantity',
      dataIndex: 'unitQty',
      key: 'unitQty',
      editable: true,
    },
    {
      title: (
        <span onClick={handleUnitMeasureAdd}>
          <PlusCircleFilled style={{ color: 'blue' }} />
        </span>
      ),
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <span
          onClick={() =>
            setUnitMeasureDataRows(unitMeasureDataRows.filter((item) => item.key !== record.key))
          }
        >
          <CloseOutlined style={{ color: 'blue' }} />
        </span>
      ),
    },
  ];
  // rows: [
  //   {
  //     key: uuidv4(),
  //     name: 'carton',
  //     unitQty: '100',
  //     action: <CloseOutlined style={{ color: 'blue' }} />,
  //   },
  // ],

  return (
    <OModal
      title={'New Vendor Product'}
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <Form>
        <Row gutter={20}>
          <Col span={8}>
            <Card title="PRODUCT DETAILS">
              {productDetailsInputFields?.map((inputItem, index) => (
                <div key={`productDetail-${index}`} style={{ padding: '0.5rem 0' }}>
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
                  <div
                    key={`pricingTiers-${index}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}
                  >
                    <div>{inputItem.label}</div>
                    <OInput {...inputItem} />
                  </div>
                ))}
                <OButton
                  type="primary"
                  btnText={'ADD'}
                  style={{ border: '1px solid blue' }}
                  onClick={handlePricingTiersAdd}
                />
              </div>
              <Table
                columns={pricingTiersDataColumns}
                dataSource={pricingTiersDataRows}
                pagination={false}
              />
            </Card>
            <Card title="UNITS OF MEASURE">
              <EditableTable
                dataSource={unitMeasureDataRows}
                columns={unitMeasureDataColumns}
                pagination={false}
                handleSave={handleEditableTableChange}
              />
            </Card>
          </Col>
        </Row>
      </Form>
    </OModal>
  );
};

export default NewVendorProduct;
