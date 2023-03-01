import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { EditableTable } from '@/components/Globals/EditableTable';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Col, message, Row } from 'antd';
import { useEffect, useMemo, useState } from 'react';

interface IAddNewOrderItemTable {
  initialItems: any[];
}

const productColumns = [
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
    key: 'available',
    dataIndex: 'available',
    title: 'Available',
  },
  {
    key: 'quantity',
    dataIndex: 'quantity',
    title: 'Quantity',
    editable: true,
  },
  {
    key: 'uniPrice',
    dataIndex: 'uniPrice',
    title: 'Unit Price',
  },
  {
    key: 'totalDiscount',
    dataIndex: 'totalDiscount',
    title: 'Total Discount',
  },
];

const AddNewOrderItemTable: React.FC<IAddNewOrderItemTable> = ({ initialItems }) => {
  const { productList } = useModel('product');
  const { setNewOrder } = useModel('order');
  const [productRows, setProductRows] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const products = useMemo(() => productList.map((item) => ({ text: item.name, value: item.id })), [productList]);

  useEffect(() => {
    setProductRows(initialItems);
  }, [initialItems]);

  // const productRows = useMemo(
  //   () =>
  //     newOrder.orderItems.map((item) => ({
  //       key: item.id,
  //       product: item.name,
  //       notes: '',
  //       available: '',
  //       quantity: item.quantity,
  //       uniPrice: 10,
  //       totalDiscount: 0,
  //     })),
  //   [newOrder],
  // );

  const handleProductAdd = (value) => {
    const selectedProduct = productList.find((item) => item.id === value);

    if (selectedProduct) {
      setNewOrder((prevState) => ({
        ...prevState,
        orderItems: [...prevState.orderItems, { ...selectedProduct }],
      }));
      setProductRows([
        ...productRows,
        {
          key: selectedProduct.id,
          product: selectedProduct.name,
          notes: '',
          available: '',
          quantity: 0,
          uniPrice: 10,
          totalDiscount: 0,
        },
      ]);
    }
  };

  const handleRowEdit = (index, name, value) => {
    setProductRows(productRows.map((row) => (row.key === index ? { ...row, [name]: value } : row)));
    // setNewOrder((prevState) => ({
    //   ...prevState,
    //   orderItems: prevState.orderItems.map((item) =>
    //     index == item.id ? { ...item, [name]: value } : item,
    //   ),
    // }));
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
          const [name, quantity, price] = details;
          productItems.push({
            key: uuidv4(),
            product: name,
            notes: '',
            available: '',
            quantity: quantity,
            uniPrice: price,
            totalDiscount: 0,
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
        <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
          <small>Add Item: </small>
          <OInput
            type="select"
            options={products}
            placeholder="Select a product.."
            style={{ flex: 1, marginLeft: '0.5rem' }}
            onChange={(name: any, value: any) => handleProductAdd(value)}
          />
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
