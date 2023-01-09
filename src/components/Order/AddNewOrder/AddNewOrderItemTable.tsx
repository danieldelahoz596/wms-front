import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { EditableTable } from '@/utils/components/EditableTable';
import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';

const AddNewOrderItemTable = () => {
  const { productList } = useModel('product');
  const { newOrder, setNewOrder } = useModel('order');

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

  const products = productList.map((item) => ({ text: item.name, value: item.key }));

  const handleProductAdd = (productIndex) => {
    const selectedProduct = productList.find((item, index) => index == productIndex);

    if (selectedProduct) {
      setNewOrder((prevState) => ({
        ...prevState,
        orderItems: [...prevState.orderItems, selectedProduct],
      }));
    }
  };

  const productRows = newOrder.orderItems.map((item, index) => ({
    key: index,
    product: item.name,
    notes: '',
    available: '',
    quantity: 1,
    uniPrice: 10,
    totalDiscount: 0,
  }));

  const handleRowEdit = (index, name, value) => {
    setNewOrder((prevState) => ({
      ...prevState,
      orderItems: prevState.orderItems.map((item, itemIndex) =>
        index == itemIndex ? { ...item, [name]: value } : item,
      ),
    }));
  };

  return (
    <>
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
          <OButton type="primary" btnText={'Paste from CSV'} />
        </Col>
      </Row>
      <Row style={{ marginTop: '0.5rem' }}>
        <Col span={24}>
          <EditableTable
            columns={productColumns}
            dataSource={productRows}
            handleSave={(index, name, value) => handleRowEdit(index, name, value)}
          />
        </Col>
      </Row>
    </>
  );
};

export default AddNewOrderItemTable;
