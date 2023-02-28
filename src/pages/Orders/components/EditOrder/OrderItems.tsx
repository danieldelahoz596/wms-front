import React, { useState } from 'react';
import { Col, Input, Row, Select } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { OTable } from '@/components/Globals/OTable';
import { uuidv4 } from '@antv/xflow-core';

const productList = [
  {
    key: uuidv4(),
    listingName: 'Toys',
    masterSku: 'rudysku_4',
    productAttributes: '',
    name: 'Toys',
    stock: 30,
    unitAmount: 3.0,
    discount: 0,
    warehouse: 'warehouse 1',
    weight: '',
    height: '',
    unitQty: 1,
  },
  {
    key: uuidv4(),
    listingName: 'Toys',
    masterSku: 'rudysku_4',
    productAttributes: '',
    name: "Rudy's Test Product 3",
    stock: 85,
    unitAmount: 3.0,
    discount: 0,
    warehouse: 'warehouse 1',
    weight: '',
    height: '',
    unitQty: 1,
  },
];

const OrderItems: React.FC = () => {
  const { editableOrder, setEditableOrder } = useModel('order');
  const [search, setSearch] = useState('');

  const handleOrderProductAdd = (_key) => {
    const selectedProduct = productList.find((_item) => _item.key === _key);
    const updatedOrder = {
      ...editableOrder,
      orderItems: [...editableOrder.orderItems, { ...selectedProduct, key: uuidv4() }],
    };

    setEditableOrder(updatedOrder);
  };

  const handleOrderProductRemove = (product) => {
    const updatedOrder = {
      ...editableOrder,
      orderItems: editableOrder.orderItems.filter((_item) => _item.key !== product.key),
    };

    setEditableOrder(updatedOrder);
  };

  const handleOrderItemChange = (item, name: string, value: any) => {
    if (value || value === 0) {
      setEditableOrder((prevState) => ({
        ...prevState,
        orderItems: prevState.orderItems.map((_item) => (_item.key === item.key ? { ..._item, [name]: value } : _item)),
      }));
    }
  };

  const orderProducts = editableOrder?.orderItems.map((item: any) => {
    const subTotal = item.unitQty * item.unitAmount;
    const totalAmount = subTotal - item.discount;

    return {
      key: item.id,
      action: <CloseOutlined onClick={() => handleOrderProductRemove(item)} style={{ color: '#5F5FFF' }} />,
      product: (
        <div>
          <div>Listing Name: {item.listingName}</div>
          <div>Master SKU: {item.masterSku}</div>
          <div>Product Attributes: {item.productAttributes}</div>
        </div>
      ),
      notes: (
        <OInput
          type="text"
          name="notes"
          defaultValue={editableOrder.notes}
          onChange={(_name: string, _value: any) => handleOrderItemChange(item, _name, _value)}
        />
      ),
      quantity: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>$</span>
          <OInput
            type="number"
            name="unitQty"
            defaultValue={item.unitQty}
            onChange={(_name: string, _value: any) => handleOrderItemChange(item, _name, parseInt(_value))}
          />
        </div>
      ),
      uniPrice: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>$</span>
          <OInput
            type="number"
            name="unitAmount"
            defaultValue={item.unitAmount}
            onChange={(_name: string, _value: any) => handleOrderItemChange(item, _name, _value)}
          />
        </div>
      ),
      subtotal: `$${subTotal}`,
      discount: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>$</span>
          <OInput
            type="number"
            name="discount"
            defaultValue={item.discount}
            onChange={(_name: string, _value: any) => handleOrderItemChange(item, _name, parseFloat(_value))}
          />
        </div>
      ),
      totalCost: `$${totalAmount}`,
    };
  });

  let productOptions = productList.map((_item) => ({
    value: _item.key,
    label: `${_item.name} (${_item.stock} in stock)`,
  }));

  if (!!search) {
    productOptions = productOptions.filter((_item) => _item.label?.toLowerCase().includes(search?.toLowerCase()));
  }

  return (
    <>
      <Row>
        <Col offset={6} span={12}>
          <Select
            placeholder="Add a product.."
            size="small"
            style={{ width: '100%' }}
            options={productOptions}
            onChange={(value: any) => handleOrderProductAdd(value)}
            dropdownRender={(_menu) => (
              <>
                <Input
                  onChange={(e) => setSearch(e.target.value)}
                  addonAfter={<SearchOutlined style={{ padding: '0.4rem' }} />}
                />
                {_menu}
              </>
            )}
          />
        </Col>
        <Col span={6}>&nbsp;</Col>
      </Row>
      <Row>
        <Col span={24} style={{ marginTop: '1rem' }}>
          <OTable
            columns={[
              {
                key: 'action',
                dataIndex: 'action',
                title: '',
              },
              {
                key: 'product',
                dataIndex: 'product',
                title: 'Product',
              },
              {
                key: 'notes',
                dataIndex: 'notes',
                title: 'Notes',
              },
              {
                key: 'quantity',
                dataIndex: 'quantity',
                title: 'Quantity',
              },
              {
                key: 'uniPrice',
                dataIndex: 'uniPrice',
                title: 'Unit Price',
              },
              {
                key: 'subtotal',
                dataIndex: 'subtotal',
                title: 'Sub Total',
              },
              {
                key: 'discount',
                dataIndex: 'discount',
                title: 'Discount',
              },
              {
                key: 'totalCost',
                dataIndex: 'totalCost',
                title: 'Total Cost',
              },
            ]}
            rows={orderProducts}
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default OrderItems;
