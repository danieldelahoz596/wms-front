import { OInput } from '@/components/Globals/OInput';
import { OTable } from '@/components/Globals/OTable';
import type { IPOOtherCost } from '@/interfaces';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { OModal } from '../Globals/OModal';

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
      title: <PlusCircleOutlined style={{ color: 'blue', fontSize: 14 }} onClick={showModal} />,
      dataIndex: 'add',
      key: 'add',
    },
    {
      title: 'Other Costs',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
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
        <Col span={6}>
          <span>${getPoTotalCost(selectedPO)}</span>{' '}
        </Col>
      </Row>

      <OModal
        title="Add New Cost"
        width={250}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <>
          <OInput type="text" name="name" onChange={handleChange} placeholder="Title" />
          <div style={{ margin: '0.1rem 0' }}>&nbsp;</div>
          <OInput type="number" name="cost" onChange={handleChange} placeholder="amount" />
        </>
      </OModal>
    </>
  );
};

export default AggregateCostTable;
