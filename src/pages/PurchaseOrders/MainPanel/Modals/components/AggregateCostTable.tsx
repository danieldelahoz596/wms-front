import { OTable } from '@/components/Globals/OTable';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Row, Form, Input, InputNumber } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { OModal } from '../../../../../components/Globals/OModal';

const AggregateCostTable: React.FC = () => {
  const { otherCosts, setOtherCosts } = useModel('po');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      setOtherCosts((prev) => [...prev, values]);
      form.resetFields();
      setIsModalOpen(false);
    });
  };

  const handleRemove = useCallback(
    (removeIndex) => setOtherCosts((prev) => prev.filter((cost, index) => index !== removeIndex)),
    [setOtherCosts],
  );

  const columns = [
    {
      title: <PlusCircleOutlined style={{ color: 'blue', fontSize: 14 }} onClick={() => setIsModalOpen(true)} />,
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: 'Other Costs',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const rows = useMemo(
    () =>
      otherCosts.map((item: any, index: number) => ({
        key: index,
        action: (
          <div>
            <MinusCircleOutlined style={{ color: 'blue' }} onClick={() => handleRemove(index)} />
          </div>
        ),
        name: item.name,
        amount: item.amount,
      })),
    [otherCosts, handleRemove],
  );

  return (
    <>
      <OTable
        type="checkbox"
        columns={columns}
        rows={rows}
        pagination={false}
        style={{ marginTop: 3, marginBottom: 3, textAlign: '' }}
      />
      <Row>
        <Col offset={12} span={6}>
          <span>Total:</span>
        </Col>
        <Col span={6}>{/* <span>${selectedPO?.other_costs.reduce((pre, cur) => pre + cur.cost, 0)}</span>{' '} */}</Col>
      </Row>

      <OModal title="Add New Cost" width={250} isOpen={isModalOpen} onOk={handleOk} onCancel={() => setIsModalOpen(false)}>
        <Form form={form} labelCol={{ span: 8 }} labelAlign="left">
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Pleas input the name' }]}>
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please input the amount of the cost' }]}>
            <InputNumber placeholder="Amount" style={{ width: '100%' }} min={0} />
          </Form.Item>
        </Form>
      </OModal>
    </>
  );
};

export default AggregateCostTable;
