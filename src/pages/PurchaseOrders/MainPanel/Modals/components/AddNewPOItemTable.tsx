import { OButton } from '@/components/Globals/OButton';
import POItemsFromCSVModal from '@/pages/PurchaseOrders/MainPanel/Modals/POItemsFromCSV';
import { EditableTable } from '@/components/Globals/EditableTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Form, Space, Select, InputNumber } from 'antd';
import { useState, useMemo, useCallback } from 'react';

const AddNewPOItemTable: React.FC = () => {
  const { poItems, setPoItems } = useModel('po');
  const { productList } = useModel('product');
  const { unitOfMeasureList } = useModel('unitOfMeasure');
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();

  const handleRemoveItem = useCallback((index) => setPoItems((prev) => prev.filter((_, i) => i !== index)), [setPoItems]);

  const unitMeasureOptions = useMemo(
    () => unitOfMeasureList.map((item) => ({ value: item.id, label: item.name })),
    [unitOfMeasureList],
  );

  const AddNewPOItemTableColumns = useMemo(
    () => [
      {
        title: '',
        key: 'action',
        render: (_, record) => (
          <div onClick={() => handleRemoveItem(record.key)}>
            <CloseOutlined style={{ color: 'blue', cursor: 'pointer' }} />
          </div>
        ),
      },
      {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
      },
      {
        title: 'Vendor SKU',
        dataIndex: 'vendorSku',
        key: 'vendorSku',
      },
      {
        title: 'Buyer.',
        dataIndex: 'buyer',
        key: 'buyer',
      },
      {
        title: 'Qty.',
        dataIndex: 'qty',
        key: 'qty',
        editable: true,
      },
      {
        title: 'Unit of Measure',
        dataIndex: 'unitMeasure',
        key: 'unitMeasure',
        options: unitMeasureOptions,
        // editable: true,
      },
      {
        title: 'Unit Cost',
        dataIndex: 'unitCost',
        key: 'unitCost',
      },
      {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
        editable: true,
      },
    ],
    [handleRemoveItem, unitMeasureOptions],
  );

  const productOptions = useMemo(
    () =>
      productList
        .filter((product) => !poItems.map((item) => item.product_id).includes(product.id))
        .map((product) => ({ value: product.id, label: product.name })),
    [productList, poItems],
  );

  // store product to po model
  const handleAddNewPOProductItem = () => {
    form.validateFields().then((values) => {
      setPoItems((prev) => [
        ...prev,
        {
          ...values,
          discount: 0,
          tax: 0,
          billed_cost: 0,
          landed_cost: 0,
          product: productList.find((product) => product.id === values.product_id),
          unit_of_measure: unitOfMeasureList.find((item) => item.id === values.unit_of_measure_id),
        },
      ]);
      form.resetFields();
    });
  };

  const handleTableUpdate = (index, name, value) => {
    setPoItems((prev) => prev.map((item, i) => (i === index ? { ...item, [name]: parseFloat(value) } : item)));
  };

  // prepare data table rows
  const rows = useMemo(
    () =>
      poItems.map((item: any, index: any) => ({
        key: index,
        product: item.product.name,
        vendorSku: item.product.sku,
        qty: item.qty,
        unitMeasure: item.unit_of_measure.name,
        unitCost: item.product.vendor_cost,
        discount: item.discount,
      })),
    [poItems],
  );

  return (
    <>
      <div className="space-between" style={{ margin: '20px 0 8px' }}>
        <Space>
          {/* {inputFields.map((inputItem, index) => (
              <Form.Item label={inputItem.label} key={index}>
                <OInput {...inputItem} />
              </Form.Item>
            ))} */}
          <Form layout="inline" form={form}>
            <Form.Item label="Add Item" name="product_id" rules={[{ required: true, message: 'Please select Product Item' }]}>
              <Select options={productOptions} style={{ width: 150 }} />
            </Form.Item>
            <Form.Item label="Quantity" name="qty" rules={[{ required: true, message: 'Please input the quantity' }]}>
              <InputNumber style={{ width: 80 }} min={0} />
            </Form.Item>
            <Form.Item
              label="Unit of Measure"
              name="unit_of_measure_id"
              rules={[{ required: true, message: 'Please select the Unit of Measure' }]}
            >
              <Select options={unitMeasureOptions} style={{ width: 150 }} />
            </Form.Item>
          </Form>
          <OButton btnText="Add" onClick={handleAddNewPOProductItem} size="large" />
          <OButton btnText="Paste From CSV" size="large" onClick={() => setShowModal(true)} />
        </Space>
      </div>

      <EditableTable dataSource={rows} columns={AddNewPOItemTableColumns} handleSave={handleTableUpdate} pagination={false} />

      {/* <POItemsFromCSVModal
        isOpen={showModal}
        onSave={(items) => {
          addPoItems(items);
          setShowModal(false);
        }}
        onClose={() => setShowModal(false)}
      /> */}
    </>
  );
};

export default AddNewPOItemTable;
