import { OButton } from '@/components/Globals/OButton';
import { EditableTable } from '@/components/Globals/EditableTable';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Col, message, Row, Select, Form } from 'antd';
import { useMemo } from 'react';

interface IAddNewOrderItemTable {
  productRows: any[];
  setProductRows: (rows: any) => void;
}

const AddNewOrderItemTable: React.FC<IAddNewOrderItemTable> = ({ productRows, setProductRows }) => {
  const { productList } = useModel('product');
  const [messageApi, contextHolder] = message.useMessage();

  const handleDeleteRow = (id) => {
    setProductRows((prev) => prev.filter((item) => item.key !== id));
  };

  const productColumns = useMemo(
    () => [
      {
        key: 'product',
        dataIndex: 'product',
        title: 'Product',
      },
      {
        key: 'quantity',
        dataIndex: 'quantity',
        title: 'Quantity',
        editable: true,
      },
      {
        key: 'unit_price',
        dataIndex: 'unit_price',
        title: 'Unit Price',
        editable: true,
      },
      {
        key: 'discount',
        dataIndex: 'discount',
        title: 'Total Discount',
        editable: true,
      },
      {
        key: 'action',
        align: 'center',
        render: (_, record) => <a onClick={() => handleDeleteRow(record.key)}>Delete</a>,
      },
    ],
    [],
  );

  const productOptions = useMemo(
    () =>
      productList
        .filter((item) => !productRows.map((row) => row.key).includes(item.id))
        .map((item) => ({ label: item.name, value: item.id })),
    [productList, productRows],
  );

  const handleProductAdd = (value) => {
    const selectedProduct = productList.find((item) => item.id === value);

    if (selectedProduct) {
      setProductRows((prev) => [
        ...prev,
        {
          key: selectedProduct.id,
          product: selectedProduct.name,
          quantity: 1,
          unit_price: 0,
          discount: 0,
        },
      ]);
    }
  };

  const handleRowEdit = (index, name, value) => {
    if (name === 'quantity' && value <= 0) setProductRows((prev) => prev.filter((item) => item.key !== index));
    else setProductRows(productRows.map((row) => (row.key === index ? { ...row, [name]: value } : row)));
  };

  const handlePasteFromCSV = () => {
    const productItems = [];
    navigator.clipboard.readText().then((text) => {
      const items = text.split(/\r\n|\r|\n/);
      items.forEach((item) => {
        const details = item.split(',');
        if (details.length !== 3)
          messageApi.open({
            type: 'error',
            content: `${item} should be have 3 inputs separated by commas.`,
          });
        else if (!details[2].includes('.'))
          messageApi.open({
            type: 'error',
            content: `${item} Unit Price should have decimal points.`,
          });
        else {
          const [name, quantity] = details;
          productItems.push({
            key: uuidv4(),
            product: name,
            notes: '',
            available: '',
            quantity: quantity,
            unit_price: 0,
            discount: 0,
          });
        }
      });
      setProductRows((prev) => [...prev, ...productItems]);
    });
  };

  return (
    <>
      {contextHolder}
      <Row style={{ marginTop: '0.5rem' }}>
        <Col span={12}>
          <Form labelCol={{ span: 6 }} labelAlign="left">
            <Form.Item label="Add Item">
              <Select
                options={productOptions}
                style={{ width: '100%' }}
                size="small"
                onChange={(value) => handleProductAdd(value)}
              />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <OButton btnText={'Paste from CSV'} onClick={handlePasteFromCSV} />
        </Col>
      </Row>
      <Row style={{ marginTop: '0.5rem' }}>
        <Col span={24}>
          <EditableTable columns={productColumns} dataSource={productRows} handleSave={handleRowEdit} />
        </Col>
      </Row>
    </>
  );
};

export default AddNewOrderItemTable;
