import { useMemo, useEffect, useState } from 'react';
import { Select, Form, Row, Col, Input, Button, message } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { EditableTable } from '@/components/Globals/EditableTable';
import { CloseOutlined } from '@ant-design/icons';
import TransferItemsFromCSVModal from './TransferItemsFromCSV';

const { TextArea } = Input;

interface IStockTransferSecondStepModal {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onSave: (values: any) => void;
  warehouses: any;
}

const StockTransferSecondStepModal: React.FC<IStockTransferSecondStepModal> = ({
  isOpen,
  onClose,
  onBack,
  onSave,
  warehouses,
}) => {
  const { warehouseList } = useModel('warehouse');
  const { productList } = useModel('product');
  const [sourceWarehouse, setSourceWarehouse] = useState(null);
  const [destinationWarehouse, setDestinationWarehouse] = useState(null);
  const [transferRows, setTransferRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const handleRemoveRow = (id) => {
    setTransferRows((prev) => prev.filter((item) => item.key !== id));
  };

  const TColumns = [
    {
      key: 'action',
      dataIndex: 'key',
      render: (id) => (
        <span onClick={() => handleRemoveRow(id)}>
          <CloseOutlined style={{ color: 'blue' }} />
        </span>
      ),
    },
    {
      key: 'product',
      dataIndex: 'product',
      title: 'Product',
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
  ];

  useEffect(() => {
    if (!!warehouses) {
      setSourceWarehouse(warehouseList.find((item) => item.id === warehouses.source));
      setDestinationWarehouse(warehouseList.find((item) => item.id === warehouses.destination));
    }
  }, [warehouses, warehouseList]);

  const productOptions = useMemo(
    () =>
      productList
        .filter((item) => !transferRows.map((row) => row.key).includes(item.id))
        .map((item) => ({ value: item.id, label: item.name })),
    [productList, transferRows],
  );

  const handleRowEdit = (index, name, value) => {
    setTransferRows(transferRows.map((row) => (row.key === index ? { ...row, [name]: value } : row)));
  };

  const handleSelectProduct = (value) => {
    setTransferRows((prev) => [
      ...prev,
      { key: value, product: productList.find((item) => item.id === value).name, available: 100 },
    ]);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave({ ...values, transferRows, source: sourceWarehouse.name, destination: destinationWarehouse.name });
    });
  };

  return (
    <OModal
      title="New Cross-Warehouse Stock Transfer Order"
      width={MODAL_WIDTH}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onBack,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Continue',
          onClick: handleSave,
        },
      ]}
    >
      <>
        {contextHolder}
        <Form form={form}>
          <Row gutter={10} align="middle">
            <Col span={12}>
              <Form.Item label="Draw From">{sourceWarehouse?.name}</Form.Item>
              <Form.Item label="Transfer To">{destinationWarehouse?.name}</Form.Item>
              <Form.Item label="Order #" name="order_number" rules={[{ required: true, message: 'Please input Order Number' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Internal Notes"
                labelCol={{ span: 24 }}
                name="notes"
                rules={[{ required: true, message: 'Please input Internal Notes' }]}
              >
                <TextArea />
              </Form.Item>
            </Col>
          </Row>

          <Row align="middle">
            <Col span={18}>
              <Form.Item label="Add Item">
                <Select
                  showSearch
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  size="small"
                  options={productOptions}
                  style={{ width: '100%' }}
                  onChange={handleSelectProduct}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Button onClick={() => setShowModal(true)}>Paste From CSV</Button>
              </div>
            </Col>
          </Row>

          <EditableTable columns={TColumns} dataSource={transferRows} handleSave={handleRowEdit} />
        </Form>

        <TransferItemsFromCSVModal
          isOpen={showModal === true}
          onSave={(data) => {
            const items = data.split(/\r\n|\r|\n/);
            items.forEach((item) => {
              const details = item.split(',');
              if (details.length !== 2)
                messageApi.open({
                  type: 'error',
                  content: `${item} should be have 2 inputs separated by commas.`,
                });
              else {
                const [name, quantity] = details;
                const product = productList.find((pro) => pro.name === name);
                if (!!product) {
                  setTransferRows((prev) => [
                    ...prev,
                    { key: product.id, product: product.name, available: 100, quantity: quantity },
                  ]);
                } else
                  messageApi.open({
                    type: 'error',
                    content: `${item} have incorrect product.`,
                  });
              }
            });
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      </>
    </OModal>
  );
};

export default StockTransferSecondStepModal;
