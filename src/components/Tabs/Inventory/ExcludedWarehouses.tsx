import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Row, Col, Select, Form, Table } from 'antd';
import { useMemo, useState } from 'react';

const ExcludedWarehouses: React.FC = () => {
  const { warehouseList } = useModel('warehouse');
  const [columns, setColumns] = useState([]);

  const TColumns = [
    {
      key: 'warehouse',
      dataIndex: 'name',
      title: 'Excluded Warehouses',
    },
    {
      key: 'action',
      dataIndex: 'id',
      render: (id) => (
        <span onClick={() => setColumns(columns.filter((column) => column.id !== id))}>
          <CloseOutlined style={{ color: 'gray' }} />
        </span>
      ),
    },
  ];

  const warehouseOptions = useMemo(
    () =>
      warehouseList
        .filter((warehouse) => !columns.map((item) => item.id).includes(warehouse.id))
        .map((item) => ({ value: item.id, label: item.name })),
    [warehouseList, columns],
  );

  return (
    <Row gutter={10}>
      <Col span={16}>
        <Form>
          <Form.Item label="Add Warehouse to Exclude" labelCol={{ span: 12 }} labelAlign="left">
            <Select
              options={warehouseOptions}
              onChange={(id) => {
                const selectedItem = warehouseList.find((warehouse) => warehouse.id === id);
                setColumns((prev) => [...prev, { key: selectedItem.id, ...selectedItem }]);
              }}
            />
          </Form.Item>

          <Table columns={TColumns} dataSource={columns} pagination={{ hideOnSinglePage: true }} style={{ marginTop: 10 }} />
        </Form>
      </Col>
      <Col span={8}>
        <p>
          If you would like Skubana to prevent a warehouse stock for this product from being included in the available inventory
          totals pushed to your sales channels, simply add those warehouses to the exclusion list.
        </p>
        <p>
          Please note that adding a warehouse to this list is the equivalent of telling the channel you have zero stock for this
          product within that warehouse. This is particularly useful if you have FBA inventory, but you do not do any
          multi-channel fulillment.
        </p>
      </Col>
    </Row>
  );
};

export default ExcludedWarehouses;
