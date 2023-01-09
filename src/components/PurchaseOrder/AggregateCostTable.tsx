import React, { useState } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import { OTable } from '@/components/Globals/OTable';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { OInput } from '@/components/Globals/OInput';
import type { IPOOtherCost } from '@/interfaces';
import { useModel } from '@umijs/max';

const AggregateCostTable: React.FC = () => {
  const { addOtherCost, removeOtherCost, selectedPO, getPoTotalCost } = useModel('po');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCost, setNewCost] = useState<IPOOtherCost>({
    name: '',
    cost: 0,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (name: string, value: any) =>
    setNewCost((prev) => ({
      ...prev,
      [name]: name === 'cost' ? parseFloat(value) : value,
    }));

  const handleOk = () => {
    addOtherCost(newCost);
    setNewCost({
      name: '',
      cost: 0,
    });
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: (
        <div onClick={showModal}>
          <PlusCircleOutlined style={{ color: 'blue' }} />
        </div>
      ),
      dataIndex: 'add',
      key: 'add',
    },
    {
      title: 'Other Costs',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
    },
  ];

  const rows = selectedPO?.otherCost?.map((item: any, index: number) => ({
    add: (
      <div onClick={() => {}}>
        <MinusCircleOutlined style={{ color: 'blue' }} onClick={() => removeOtherCost(index)} />
      </div>
    ),
    name: item.name,
    cost: item.cost,
  }));

  return (
    <>
      <Card bordered>
        <OTable type="checkbox" columns={columns} rows={rows} pagination={false} />
      </Card>
      <hr />
      <Row>
        <Col span={12}>&nbsp;</Col>
        <Col span={6}>Total:</Col>
        <Col span={6}> ${getPoTotalCost(selectedPO)} </Col>
      </Row>
      <Modal title="Add new cost" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <OInput type="text" name="name" onChange={handleChange} placeholder="Title" />
        <div style={{ margin: '0.1rem 0' }}>&nbsp;</div>
        <OInput type="number" name="cost" onChange={handleChange} placeholder="amount" />
      </Modal>
    </>
  );
};

export default AggregateCostTable;
